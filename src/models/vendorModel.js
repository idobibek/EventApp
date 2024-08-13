const mongoose = require('mongoose');

// Base Vendor Schema
const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: String,
  type: {
    type: String,
    required: true,
    enum: ['CateringVendor', 'DecorationVendor', 'EntertainmentVendor']
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { discriminatorKey: 'type' });

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
