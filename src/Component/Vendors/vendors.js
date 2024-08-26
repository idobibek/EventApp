import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/axiosConfig";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const VendorComponent = () => {
  const [vendors, setVendors] = useState([]);
  const [newVendor, setNewVendor] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    type: "CateringVendor",
  });
  const [editingVendor, setEditingVendor] = useState(null);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await axiosInstance.get("/api/vendors/all");
      setVendors(response.data.vendors);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVendor({ ...newVendor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingVendor) {
        const response = await axiosInstance.patch(
          `/api/vendors/update/${editingVendor._id}`,
          newVendor
        );
        toast.success(response.data.msg);
        setEditingVendor(null);
      } else {
        const response = await axiosInstance.post(
          "/api/vendors/add",
          newVendor
        );
        toast.success(response.data.msg);
      }
      setNewVendor({ name: "", email: "", phone: "", address: "", type: "CateringVendor" });
      fetchVendors();
    } catch (error) {
      console.error(error.response);
      toast.error(error.response.data.msg);
    }
  };

  const handleEdit = (vendor) => {
    setNewVendor({
      name: vendor.name,
      email: vendor.email,
      phone: vendor.phone,
      address: vendor.address,
      type: vendor.type,
    });
    setEditingVendor(vendor);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:8000/api/vendors/delete/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.success(response.data.msg);
      fetchVendors();
    } catch (error) {
      console.error("Error deleting vendor:", error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Vendors</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <ToastContainer />
        <div className="flex flex-col mb-2">
          <label htmlFor="name" className="mb-1">
            Vendor Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={newVendor.name}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="mb-1">
            Vendor Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={newVendor.email}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="phone" className="mb-1">
            Vendor Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={newVendor.phone}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="address" className="mb-1">
            Vendor Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={newVendor.address}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="type" className="mb-1">
            Vendor Type
          </label>
          <select
            name="type"
            id="type"
            value={newVendor.type}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="CateringVendor">Catering</option>
            <option value="DecorationVendor">Decoration</option>
            <option value="EntertainmentVendor">Entertainment</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingVendor ? "Update Vendor" : "Add Vendor"}
        </button>
      </form>
      <div>
        <h2 className="text-xl font-semibold mb-2">Vendor List</h2>
        <ul>
          {vendors.map((vendor) => (
            <li
              key={vendor._id}
              className="flex justify-between items-center border-b border-gray-300 py-2"
            >
              <div>
                <h3>{vendor.name}</h3>
                <p>{vendor.email}</p>
                <p>{vendor.phone}</p>
                <p>{vendor.address}</p>
                <p>{vendor.type}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(vendor)}
                  className="mr-2 text-blue-500"
                >
                  <AiFillEdit />
                </button>
                <button
                  onClick={() => handleDelete(vendor._id)}
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
  );
};

export default VendorComponent;
