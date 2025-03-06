import React from "react";

import { useState, useEffect } from "react";

const JSXAsync_Await = () => {
  // state variable to store the data
  const [user, setUser] = useState(null);
  const [id, setId] = useState(0);

  // async/await function to fetch the data
  const fetchData = async () => {
    try {
      // fetching data from api
      const respose = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + id
      );
      if (!respose.ok) {
        throw new Error("HTTP Error: " + respose.status);
      }
      const data = await respose.json();
      setUser(data);
    } catch (error) {
      throw new error(error.message);
    }
  };

  // call async function inside useEffect when component is mounted
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>Todo List</h1>
        <p>Enter the todo id:</p>
        <input
          type="text"
          value={id}
          placeholder="Enter the todo id:"
          onChange={(event) => setId(event.target.value)}
        />

        <button onClick={() => fetchData()}>Fetch Data</button>

        {/* display */}
        {user ? (
          <div>
            <h2>Todo Item</h2>
            <p>
              <strong>Id:</strong>
              {user.id}
            </p>
            <p>
              <strong>Title:</strong>
              {user.title}
            </p>
            <p>
              <strong>Completed Status:</strong>
              {user.completed ? "✅ Yes" : "❌ No"}
            </p>
          </div>
        ) : (
          "Enter the id to fetch the data"
        )}
      </div>
    </div>
  );
};

export default JSXAsync_Await;
