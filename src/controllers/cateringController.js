const CateringVendor = require('../models/CateringVendor');

// Get all catering vendors
exports.getAllCateringVendors = async (req, res) => {
  try {
    const vendors = await CateringVendor.find();
    res.status(200).json({ success: true, vendors });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Failed to fetch catering vendors' });
  }
};

// Get a specific catering vendor by ID
exports.getCateringVendorById = async (req, res) => {
  try {
    const vendor = await CateringVendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ success: false, msg: 'Catering vendor not found' });
    }
    res.status(200).json({ success: true, vendor });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Failed to fetch catering vendor' });
  }
};

// Create a new catering vendor
exports.createCateringVendor = async (req, res) => {
  try {
    const newVendor = new CateringVendor(req.body);
    await newVendor.save();
    res.status(201).json({ success: true, msg: 'Catering vendor created', vendor: newVendor });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Failed to create catering vendor' });
  }
};

// Update a catering vendor
exports.updateCateringVendor = async (req, res) => {
  try {
    const updatedVendor = await CateringVendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedVendor) {
      return res.status(404).json({ success: false, msg: 'Catering vendor not found' });
    }
    res.status(200).json({ success: true, msg: 'Catering vendor updated', vendor: updatedVendor });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Failed to update catering vendor' });
  }
};

// Delete a catering vendor
exports.deleteCateringVendor = async (req, res) => {
  try {
    const deletedVendor = await CateringVendor.findByIdAndDelete(req.params.id);
    if (!deletedVendor) {
      return res.status(404).json({ success: false, msg: 'Catering vendor not found' });
    }
    res.status(200).json({ success: true, msg: 'Catering vendor deleted' });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Failed to delete catering vendor' });
  }
};
