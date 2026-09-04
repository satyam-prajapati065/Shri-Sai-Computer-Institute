import Enquiry from '../models/Enquiry.js';
import { getDBStatus } from '../config/db.js';

// Safe in-memory fallback list if MongoDB is offline in local preview
const inMemoryEnquiries = [];

/**
 * @desc   Create new enquiry submission
 * @route  POST /api/enquiries
 * @access Public
 */
export const createEnquiry = async (req, res) => {
  try {
    const { name, phone, course, message } = req.body;

    // Basic server-side validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Please provide your full name.',
      });
    }

    if (!phone || typeof phone !== 'string' || phone.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid contact phone number.',
      });
    }

    const cleanPhone = phone.trim();
    // Validate phone length and characters (basic check for digits)
    const digitsOnly = cleanPhone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid 10-digit phone number.',
      });
    }

    const enquiryData = {
      name: name.trim(),
      phone: cleanPhone,
      course: course && course.trim() !== '' ? course.trim() : 'General Enquiry',
      message: message ? message.trim() : '',
      createdAt: new Date(),
    };

    let savedRecord = null;
    const isMongoActive = getDBStatus();

    if (isMongoActive) {
      const newEnquiry = new Enquiry(enquiryData);
      savedRecord = await newEnquiry.save();
    } else {
      // Fallback cache when MongoDB URI is not active yet
      savedRecord = {
        _id: 'local_' + Date.now(),
        ...enquiryData,
      };
      inMemoryEnquiries.unshift(savedRecord);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been submitted successfully. Our team will contact you soon.',
      data: savedRecord,
      storage: isMongoActive ? 'mongodb' : 'memory_fallback',
    });
  } catch (error) {
    console.error('Error creating enquiry:', error);

    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages.join(', '),
      });
    }

    return res.status(500).json({
      success: false,
      error: 'Server error processing your enquiry. Please try again or call 9560654195.',
    });
  }
};

/**
 * @desc   Get system status / count of enquiries
 * @route  GET /api/enquiries/stats
 * @access Public
 */
export const getEnquiryStats = async (req, res) => {
  try {
    const isMongoActive = getDBStatus();
    let totalCount = 0;

    if (isMongoActive) {
      totalCount = await Enquiry.countDocuments();
    } else {
      totalCount = inMemoryEnquiries.length;
    }

    return res.status(200).json({
      success: true,
      totalCount,
      databaseConnected: isMongoActive,
      institute: 'SHRI SAI COMPUTER INSTITUTE',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Error fetching stats',
    });
  }
};
