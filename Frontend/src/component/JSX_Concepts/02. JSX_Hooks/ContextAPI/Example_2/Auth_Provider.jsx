// Step 2

import { AuthContext } from "./Create_Context";
import { useState } from "react";
// Auth Provider to manage the state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // creating functionality that being shared across all the components
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
