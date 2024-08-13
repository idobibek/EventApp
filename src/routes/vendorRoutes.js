const express = require('express');
const {
  createVendor,
  getAllVendors,
  getVendorById,
  updateVendorById,
  deleteVendorById,
} = require('../controllers/vendorController');
const authenticate = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizationMiddleware'); // Optional, if you want role-based authorization
const router = express.Router();

// Create a new vendor (authentication required)
router.post('/add', authenticate, authorizeRole('admin'), createVendor);

// Get all vendors (authentication required)
router.get('/get', authenticate, getAllVendors);

// Get a single vendor by ID (authentication required)
router.get('/get/:id', authenticate, getVendorById);

// Update a vendor by ID (authentication required, role-based authorization)
router.patch('/update/:id', authenticate, authorizeRole('admin'), updateVendorById);

// Delete a vendor by ID (authentication required, role-based authorization)
router.delete('/delete/:id', authenticate, authorizeRole('admin'), deleteVendorById);

module.exports = router;
