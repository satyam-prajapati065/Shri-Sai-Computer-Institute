import express from 'express';
import { createEnquiry, getEnquiryStats } from '../controllers/enquiryController.js';

const router = express.Router();

// POST /api/enquiries - Submit a new enquiry
router.post('/', createEnquiry);

// GET /api/enquiries/stats - Check status / stats
router.get('/stats', getEnquiryStats);

export default router;
