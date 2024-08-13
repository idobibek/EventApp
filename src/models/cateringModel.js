const mongoose = require('mongoose');
const Vendor = require('./vendor');

// Catering Vendor Schema
const cateringVendorSchema = new mongoose.Schema({
  menuOptions: [String],
  maxCapacity: Number
});

const CateringVendor = Vendor.discriminator('CateringVendor', cateringVendorSchema);

module.exports = CateringVendor;
