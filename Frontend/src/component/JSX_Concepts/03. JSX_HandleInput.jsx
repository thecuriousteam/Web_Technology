import React, { useState, useEffect } from "react";

const Example_RememberUsername = () => {
  const [name, setName] = useState("");

  // useeffect - once the component is mounted we can reterive the stored username
  useEffect(() => {
    const username = localStorage.getItem("userName");
    if (username) {
      setName(username);
    }
  }, []);

  // handleinput to get the input username and store it in the local storage
  const handleInput = (event) => {
    event.preventDefault();
    const newUsername = event.target.value;
    setName(newUsername);
    localStorage.setItem("userName", newUsername);
  };

  return (
    <div>
      <div>
        <h2>Enter the username:</h2>
        <input
          type="text"
          placeholder="Your username"
          name="userName"
          value={name}
          onChange={handleInput}
        />
      </div>

      <div>
        {/* display */}
        Current Username: {name || "No User name"}
      </div>
    </div>
  );
};

const HandleInput_LocalStorage = () => {
  return (
    <div>
      <Example_RememberUsername />
    </div>
  );
};

export default HandleInput_LocalStorage;
