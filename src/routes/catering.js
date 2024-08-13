// routes/cateringVendor.js
const express = require('express');
const router = express.Router();
const cateringVendorController = require('../controllers/cateringVendorController');

router.post('/', cateringVendorController.createCateringVendor);
router.get('/', cateringVendorController.getAllCateringVendors);
router.get('/:id', cateringVendorController.getCateringVendorById);
router.patch('/:id', cateringVendorController.updateCateringVendorById);
router.delete('/:id', cateringVendorController.deleteCateringVendorById);

module.exports = router;
