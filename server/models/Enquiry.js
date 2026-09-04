import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide your contact phone number'],
      trim: true,
      validate: {
        validator: function (v) {
          // Allows 10-14 digit numbers with optional + or dashes
          return /^(\+?\d{1,4}[\s-]?)?\(?\d{3,5}\)?[\s-]?\d{3,5}[\s-]?\d{3,5}$/.test(v.replace(/\s+/g, ''));
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    course: {
      type: String,
      default: 'General Enquiry',
      trim: true,
    },
    message: {
      type: String,
      default: '',
      trim: true,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

// Prevent overwrite in case of re-import
const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);

export default Enquiry;
