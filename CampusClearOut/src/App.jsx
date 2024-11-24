import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Listings } from "./pages/Listings";
import { MyListings } from "./pages/MyListings";
import { MyRequests } from "./pages/MyRequests";
import { CreateListing } from "./components/CreateListing";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import MainLayout from "./MainLayout"; // layout wrapper for shared components like navbar
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap for styling
import "./App.css"; // app-specific styling
import { ListingDetails } from "./pages/ListingDetails";
import { AuthProvider } from "./pages/Auth";

function App() {
  return (
    // router is the root component that enables client-side routing in the app
    <AuthProvider>
      <Router>
        {/* mainlayout is a layout wrapper that contains the navbar and other shared ui elements */}
        <MainLayout>
          <Routes>
            {/* route for the main listings page, available at the root path "/" */}
            <Route path="/" element={<Listings />} />

            {/* dynamic route for viewing a specific listing's details by its postid, accessible at "/listings/:postid" */}
            <Route path="/listings/:postId" element={<ListingDetails />} />

            {/* route for the registration page */}
            <Route path="/register" element={<Register />} />

            {/* route for the login page, passing settriggerrefetch for re-fetching user state after login */}
            <Route path="/login" element={<Login />} />

            {/* route for the dashboard page */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* route for the "my listings" page, accessible at "/dashboard/mylistings" */}
            <Route path="/dashboard/mylistings" element={<MyListings />} />

            {/* route for creating a new listing, accessible at "/dashboard/mylistings/create" */}
            <Route
              path="/dashboard/mylistings/create"
              element={<CreateListing />}
            />

            {/* route for viewing "my requests", accessible at "/dashboard/myrequests" */}
            <Route path="/dashboard/myrequests" element={<MyRequests />} />
          </Routes>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
