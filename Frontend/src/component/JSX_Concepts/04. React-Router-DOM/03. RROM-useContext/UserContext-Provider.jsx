import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    role: "Software Engineer",
    bio: "Passionate developer with 5 years of experience in React and Node.js.",
  });

  // user operations
  const updateUser = (userInfo) => {
    setUser({ ...user, ...userInfo });
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
