import React from "react";

import { useState, useEffect } from "react";

const JSX_Promises_Example = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState();
  const [message, setMessage] = useState();

  // promise function
  const fetchTodo = (id) => {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/tdos/${id}`)
        .then((response) => {
          if (!response.ok) {
            reject(`Error ${response.status}: Failed to fetch data`);
          }
          // return the json response
          return response.json();
        })
        .then((data) => {
          setMessage("Message Fetched Successfully");
          setTodos(data);
          // resolving promise
          resolve(data);
        })
        .catch((error) => {
          setMessage(error.message);
          reject(error);
        });
    });
  };

  useEffect(() => {
    // call the fetchTodo API Function on component mount
    fetchTodo(id).catch((reject) => setMessage(reject));
  }, []);

  return (
    <div>
      <div>
        <h1>Todo Using Promise</h1>
        <input
          type="text"
          value={id}
          placeholder="Enter todo id:"
          onChange={(event) => setId(event.target.value)}
        />
        <button onClick={() => fetchTodo(id)}>Fetch Todo</button>

        <h2>Message: {message}</h2>

        {/* display */}
        {todos ? (
          <div>
            <h2>Todo Item</h2>
            <p>
              <strong>Id:</strong>
              {todos.id}
            </p>
            <p>
              <strong>Title:</strong>
              {todos.title}
            </p>
            <p>
              <strong>Completed Status:</strong>
              {todos.completed ? "✅ Yes" : "❌ No"}
            </p>
          </div>
        ) : (
          "Enter the id to fetch the data"
        )}
      </div>
    </div>
  );
};

export default JSX_Promises_Example;
