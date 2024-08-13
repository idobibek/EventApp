import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/axiosConfig";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookEvent = () => {
  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    eventDetails: "",
  });
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axiosInstance.get("/api/event/all");
      setEvents(response.data.events); // Assuming the API response has a structure like { events: [...] }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingEvent) {
        const response = await axiosInstance.patch(
          `/api/event/update/${editingEvent._id}`,
          eventData
        );
        toast.success(response.data.msg);
        setEditingEvent(null);
      } else {
        const response = await axiosInstance.post(
          "/api/event/book",
          eventData
        );
        toast.success(response.data.msg);
      }
      setEventData({
        eventName: "",
        eventDate: "",
        eventTime: "",
        venue: "",
        eventDetails: "",
      });
      fetchEvents();
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleEdit = (event) => {
    setEventData({
      eventName: event.name,
      eventDate: event.date,
      eventTime: event.time,
      venue: event.venue,
      eventDetails: event.details,
    });
    setEditingEvent(event);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.delete(
        `/api/event/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.msg);
      fetchEvents();
    } catch (error) {
      toast.error("Error deleting event:", error.response.data.msg);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Event Creation Form */}
        <div className="lg:w-1/2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {editingEvent ? "Edit Event" : "Create Event"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="eventName" className="block text-gray-700 mb-2 text-justify">
                  Book Event
                </label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  value={eventData.eventName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter event name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="eventDate" className="block text-gray-700 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={eventData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="eventTime" className="block text-gray-700 mb-2">
                  Event Time
                </label>
                <input
                  type="time"
                  id="eventTime"
                  name="eventTime"
                  value={eventData.eventTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="venue" className="block text-gray-700 mb-2">
                  Venue
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={eventData.venue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter venue"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="eventDetails" className="block text-gray-700 mb-2">
                  Event Details
                </label>
                <textarea
                  id="eventDetails"
                  name="eventDetails"
                  value={eventData.eventDetails}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter event details"
                  required
                  rows="4"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {editingEvent ? "Update Event" : "Create Event"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Event List */}
        <div className="lg:w-1/2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">Event List</h2>
            <ul>
              {events.map((event) => (
                <li
                  key={event._id}
                  className="flex justify-between items-center border-b border-gray-300 py-2"
                >
                  <div>
                    <h3 className="font-bold">Event:{event.eventName}</h3>
                    <p>Date: {event.eventDate}</p>
                    <p>Time: {event.eventTime}</p>
                    <p>Venue: {event.venue}</p>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => handleEdit(event)}
                      className="mr-2 text-blue-500"
                    >
                      <AiFillEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="text-red-500"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BookEvent;
