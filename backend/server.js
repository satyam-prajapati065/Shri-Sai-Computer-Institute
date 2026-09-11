import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "*";

// CORS configuration to allow requests from  frontend
app.use(
  cors({
    origin:
      CLIENT_URL === "*" ? "*" : CLIENT_URL.split(",").map((url) => url.trim()),
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory enquiry store (persists while server is active)
const enquiries = [];

// Base route
app.get("/", (req, res) => {
  res.json({
    name: "Shri Sai Computer Institute - Backend API",
    status: "online",
    campuses: ["Ambedkar Nagar"],
    contact: "9560654195",
    endpoints: {
      health: "/api/health",
      enquiries: "/api/enquiries",
    },
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    totalEnquiries: enquiries.length,
  });
});

// POST /api/enquiries - Submit new student admission enquiry
app.post("/api/enquiries", (req, res) => {
  try {
    const { name, phone, course, message } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: "Student name is required.",
      });
    }

    const cleanPhone = (phone || "").trim().replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return res.status(400).json({
        success: false,
        error: "Valid 10-digit phone number is required.",
      });
    }

    const newEnquiry = {
      id: "ENQ-" + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      course: course ? course.trim() : "General Enquiry",
      message: message ? message.trim() : "",
      createdAt: new Date().toISOString(),
      source: req.headers["origin"] || "web",
    };

    enquiries.unshift(newEnquiry);

    // Keep last 200 enquiries in memory
    if (enquiries.length > 200) {
      enquiries.pop();
    }

    console.log(
      `[New Enquiry] From: ${newEnquiry.name} (${newEnquiry.phone}) for ${newEnquiry.course}`,
    );

    // Generate WhatsApp direct link for instant follow-up
    const whatsappLines = [
      `*New Admission Enquiry - Shri Sai Computer Institute*`,
      `---------------------------------------`,
      `👤 *Student Name:* ${newEnquiry.name}`,
      `📞 *Phone / WhatsApp:* ${newEnquiry.phone}`,
      `📚 *Interested Course:* ${newEnquiry.course}`,
    ];
    if (newEnquiry.message) {
      whatsappLines.push(`💬 *Query / Message:* ${newEnquiry.message}`);
    }
    whatsappLines.push(`---------------------------------------`);
    whatsappLines.push(
      `Hello! I want admission & 2-day free demo class details.`,
    );

    const encodedText = encodeURIComponent(whatsappLines.join("\n"));
    const whatsappUrl = `https://wa.me/919560654195?text=${encodedText}`;

    return res.status(201).json({
      success: true,
      message: "Admission enquiry submitted successfully!",
      data: newEnquiry,
      whatsappUrl,
    });
  } catch (error) {
    console.error("[Enquiry Error]", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error while processing enquiry.",
    });
  }
});

// GET /api/enquiries - View recent enquiries (for institute administration)
app.get("/api/enquiries", (req, res) => {
  res.json({
    success: true,
    count: enquiries.length,
    enquiries: enquiries.slice(0, 50),
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[Backend] Shri Sai Institute server running on port ${PORT}`);
});
