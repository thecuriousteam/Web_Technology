import React from "react";
import UserProvider from "./UserContext-Provider";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import UserHome from "./UserHome";
import UserProfile from "./UserProfile";
import NotFoundPage from "./404Page";

const UserApp = () => {
  return (
    <div>
      {/* provider */}
      <UserProvider>
        {/* all consumers needs to be added here */}
        {/* router */}
        <Router>
          <div className="min-h-screen bg-gray-100 p-5">
            <nav className="flex gap-5 bg-white p-4 shadow-md rounded-lg">
              <Link to={"/"}>Home</Link>
              <Link to={"/profile"}>Profile</Link>
            </nav>

            {/* routes */}
            <Routes>
              <Route path="/" element={<UserHome />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </div>
  );
};

export default UserApp;
