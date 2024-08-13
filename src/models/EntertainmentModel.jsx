const mongoose = require('mongoose');
const Vendor = require('./vendorModel'); // Assuming the base Vendor model is in a file named Vendor.js

// Entertainment Vendor Schema
const entertainmentVendorSchema = new mongoose.Schema({
  entertainmentType: { type: String, required: true }, 
  performers: [String]
});

// Creating EntertainmentVendor Discriminator
const EntertainmentVendor = Vendor.discriminator('EntertainmentVendor', entertainmentVendorSchema);

module.exports = EntertainmentVendor;
