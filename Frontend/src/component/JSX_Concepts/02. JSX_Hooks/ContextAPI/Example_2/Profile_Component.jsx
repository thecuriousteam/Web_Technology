// Step 3 - Consumers userData and logout

import React, { useContext } from "react";
import { AuthContext } from "./Create_Context";

const UserProfile = () => {
  // consumer
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome: {user.name}</h2>
          <h2>Email: {user.email}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please Login.....</p>
      )}
    </div>
  );
};

export default UserProfile;
