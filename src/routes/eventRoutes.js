const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizationMiddleware');
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');

// Route to create a new event booking
router.post('/book',createEvent);

// Route to get all events
router.get('/all',getAllEvents);

// Route to get a single event by ID
router.get('/get/:id',getEventById);

// Route to update an event by ID
router.patch('/update/:id', updateEvent);

// Route to delete an event by ID
router.delete('/delete/:id', deleteEvent);

module.exports = router;

