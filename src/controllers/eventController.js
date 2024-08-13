const Event = require('../models/eventModel');

const sendErrorResponse = (res, error, statusCode = 500) => {
  console.error(error); // Improved logging
  res.status(statusCode).json({ msg: error.message });
};

// Create a new event
const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json({
      msg: "Event created successfully",
      event, // Corrected key to be lowercase and consistent
      success: true,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({
      msg: "Events fetched successfully",
      events,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get a single event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(200).json({
      msg: "Event fetched successfully",
      event,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Update an event by ID
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(200).json({
      msg: "Event updated successfully",
      event,
    });
  } catch (error) {
    sendErrorResponse(res, error, 400); // Updated to use sendErrorResponse
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(200).json({ msg: 'Event deleted successfully' });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
