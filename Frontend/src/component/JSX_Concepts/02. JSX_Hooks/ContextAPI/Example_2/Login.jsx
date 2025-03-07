// Step 3 - Consumers

// creating login context to stimulate the loggedin user
import React, { useContext } from "react";
import { AuthContext } from "./Create_Context";
const Login = () => {
  // login functionality consume destructure
  const { login } = useContext(AuthContext);

  // console.log("Login Context ", login);
  // pass the username and password to context for storage
  const handleLogin = () => {
    const userLogin = { name: "Nandan", email: "nandangn@gmail.com" };

    // send login details to context
    login(userLogin);
  };
  return (
    <div>
      <h1>Welcome to Curious Community</h1>
      <button onClick={handleLogin} className="bg-violet-500 p-5 rounded-2xl">
        Login
      </button>
    </div>
  );
};

export default Login;
