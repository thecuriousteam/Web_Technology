import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The Page which you are looking doesn't exist</p>

        {/* go back to home button */}
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
