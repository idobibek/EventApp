// routes/decorationVendor.js
const express = require('express');
const router = express.Router();
const decorationVendorController = require('../controllers/decorationVendorController');

router.post('/', decorationVendorController.createDecorationVendor);
router.get('/', decorationVendorController.getAllDecorationVendors);
router.get('/:id', decorationVendorController.getDecorationVendorById);
router.patch('/:id', decorationVendorController.updateDecorationVendorById);
router.delete('/:id', decorationVendorController.deleteDecorationVendorById);

module.exports = router;
