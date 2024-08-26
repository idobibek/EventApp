import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { toggle } from "../../features/navbar/navbarSlice";
import axiosInstance from "../../config/axiosConfig";
import { FaSearch } from "react-icons/fa";
// import logo from "../../assets/logo.png"; 

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const isOpen = useSelector((state) => state.navbar.isOpen);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.get(
        `/api/products?search=${searchTerm}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left section: Logo and Search */}
          <div className="flex items-center space-x-7">
            {/* Logo */}
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-bold text-green-800 text-xl">BEK BEE</span>
              </Link>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                className="py-2 px-4 rounded-md focus:outline border-3 border-gray-500 mx-2 focus:ring-4 focus:ring-gray-500"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="flex items-center justify-center rounded-full bg-gray-500 text-white p-2 hover:bg-gray-300 transition duration-300"
                type="submit"
              >
                <FaSearch className="text-lg" />
              </button>
            </form>
          </div>

          {/* Right section: Navigation links, login, and signup */}
          <div className="flex items-center space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                exact
                to="/"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-700"
                activeClassName="text-green-700"
              >
                Home
              </NavLink>
              {authState.isAuthenticated && (
                <>
                  <NavLink
                    to="/event"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-700"
                    activeClassName="text-green-700"
                  >
                    Event
                  </NavLink>
                  <NavLink
                    to="/book"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-700"
                    activeClassName="text-green-700"
                  >
                    Book
                  </NavLink>
                </>
              )}
              {authState.userRole === "admin" && (
                <>
                  <NavLink
                    to="/vendor"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-700"
                    activeClassName="text-green-700"
                  >
                    Vendors
                  </NavLink>
                  <NavLink
                    to="/addvendor"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-700"
                    activeClassName="text-green-700"
                  >
                    Add Vendor
                  </NavLink>
                </>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {authState.isAuthenticated ? (
                <button
                  onClick={() => dispatch(logout())}
                  className="rounded-full py-2 px-4 font-medium text-gray-500 hover:text-green-700"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="rounded-full py-2 px-4 font-medium text-gray-500 hover:text-green-700"
                    activeClassName="text-green-700"
                  >
                    Log In
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="rounded-full py-2 px-4 font-medium text-white bg-green-700 hover:bg-green-500 transition duration-300"
                  >
                    Sign Up
                  </NavLink>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => dispatch(toggle())}
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-green-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                className="block text-sm px-2 py-4 text-white bg-green-700 font-semibold"
                activeClassName="text-green-700"
              >
                Home
              </NavLink>
            </li>
            {authState.isAuthenticated && (
              <>
                <li>
                  <NavLink
                    to="/event"
                    className="block text-sm px-2 py-4 hover:text-green-700"
                    activeClassName="text-green-700"
                  >
                    Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/book"
                    className="block text-sm px-2 py-4 hover:text-green-700"
                    activeClassName="text-green-700"
                  >
                    Book
                  </NavLink>
                </li>
              </>
            )}
            {authState.userRole === "admin" && (
              <>
                <li>
                  <NavLink
                    to="/category"
                    className="block text-sm px-2 py-4 hover:text-green-700"
                    activeClassName="text-green-700"
                  >
                    Vendors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addvendor"
                    className="block text-sm px-2 py-4 hover:text-green-700"
                    activeClassName="text-green-700"
                  >
                    Add Vendor
                  </NavLink>
                </li>
              </>
            )}
            {authState.isAuthenticated ? (
              <li>
                <button
                  onClick={() => dispatch(logout())}
                  className="block text-sm px-2 py-4 hover:text-green-700 rounded-full"
                >
                  Log Out
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className="block text-sm px-2 py-4 hover:text-green-700 rounded-full"
                    activeClassName="text-green-700"
                  >
                    Log In
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className="block text-sm px-2 py-4 hover:text-green-700 rounded-full"
                    activeClassName="text-green-700"
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-lg">
          {searchResults.map((product) => (
            <div key={product._id} className="mb-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-green-700 font-bold">Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
