import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AboutPage, ContactPage, FeaturesPage, HomePage } from "./component";
const JSX_RouterHome_1 = () => {
  return (
    <div>
      <Router>
        {/* navigation menu */}
        <nav className="space-x-3">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
          <Link to={"/features"}>Features</Link>
        </nav>

        {/* add routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/Features" element={<FeaturesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default JSX_RouterHome_1;
