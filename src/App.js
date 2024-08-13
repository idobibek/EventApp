import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/navbar";
// import AboutComponent from "./components/About/aboutComponent";
import HomeComponent from "./Component/Home/HomeComponent";
import BookEvent from "./Component/Events/bookEvent";
import EventComponent from "./Component/Events/eventComponent";
// import ContactComponent from "./components/Contact/ContactComponent";
import SignupForm from "./Component/Signup/signupForm";
import VendorComponent from "./Component/Vendors/vendors";
import AddVendor from "./Component/addtype/addvendor";
import ProtectedRoute from "./ProtectedRoutes/protectedRoute";
import LoginComponent from "./Component/Login/login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            {/* <Route path="/about" element={<AboutComponent />} />
            <Route path="/contact" element={<ContactComponent />} /> */}
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginComponent/>} />
            <Route 
              path="/book" 
              element={
                <ProtectedRoute>
                  <BookEvent />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/event" 
              element={
                <ProtectedRoute>
                  <EventComponent />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/Vendor" 
              element={
                <ProtectedRoute role="admin">
                  <VendorComponent />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/addvendor" 
              element={
                <ProtectedRoute role="admin">
                  <AddVendor />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;