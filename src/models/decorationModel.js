const mongoose = require('mongoose');
const Vendor = require('./vendor');

// Decoration Vendor Schema
const decorationVendorSchema = new mongoose.Schema({
  styles: [String],
  availableThemes: [String]
});

const DecorationVendor = Vendor.discriminator('DecorationVendor', decorationVendorSchema);

module.exports = DecorationVendor;
