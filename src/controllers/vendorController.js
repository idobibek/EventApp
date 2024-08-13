const Vendor = require('../models/vendorModel');

// Create a new vendor
exports.createVendor = async (req, res) => {
  try {
    // Validate incoming data
    if (!req.body.name || !req.body.email || !req.body.phone || !req.body.type) {
      return res.status(400).json({ message: 'Name, email, phone, and type are required' });
    }

    // Create and save the new vendor
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.status(201).json({ message: 'Vendor created successfully', vendor });
  } catch (error) {
    console.error('Error creating vendor:', error);
    res.status(400).json({ message: 'Error creating vendor', error: error.message });
  }
};

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json(vendors);
  } catch (error) {
    console.error('Error fetching vendors:', error);
    res.status(500).json({ message: 'Error fetching vendors', error: error.message });
  }
};

// Get a single vendor by ID
exports.getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.status(200).json(vendor);
  } catch (error) {
    console.error('Error fetching vendor:', error);
    res.status(500).json({ message: 'Error fetching vendor', error: error.message });
  }
};

// Update a vendor by ID
exports.updateVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.status(200).json({ message: 'Vendor updated successfully', vendor });
  } catch (error) {
    console.error('Error updating vendor:', error);
    res.status(400).json({ message: 'Error updating vendor', error: error.message });
  }
};

// Delete a vendor by ID
exports.deleteVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.status(200).json({ message: 'Vendor deleted successfully', vendor });
  } catch (error) {
    console.error('Error deleting vendor:', error);
    res.status(500).json({ message: 'Error deleting vendor', error: error.message });
  }
};
