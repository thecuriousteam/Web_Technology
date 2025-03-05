import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa"; // Import star icon

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

// Feedback Form with Local Storage
const Example_FeedbackForm = () => {
  // logic
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  // load and set the name and feedback when the component is mounted
  useEffect(() => {
    // fetch the name and feedback from the localstorage
    const storedName = localStorage.getItem("username");
    const storedFeedback = localStorage.getItem("userfeedback");
    const storedRating = localStorage.getItem("userrating");

    if (storedName) {
      setName(storedName);
    }
    if (storedFeedback) {
      setFeedback(storedFeedback);
    }
    if (storedRating) {
      setRating(storedRating);
    }
  }, []);

  // handle input changes

  // handle input change for name
  const handleNameInputChanges = (event) => {
    // we will take the input
    const username = event.target.value;
    setName(username);
    localStorage.setItem("username", username);
  };

  // handle input changes for feedback
  const handleFeedbackInputChnages = (event) => {
    // we will take input
    const userfeedback = event.target.value;
    setFeedback(userfeedback);
    localStorage.setItem("userfeedback", userfeedback);
  };

  // reset form
  const resetForm = () => {
    setName("");
    setFeedback("");
    setRating(0);
    setHover(0);

    localStorage.removeItem("username");
    localStorage.removeItem("userfeedback");
  };

  return (
    <div className="space-y-2 w-[1000px]">
      <h2 className="text-center">User Feed back Form</h2>
      <div className="p-5 w-full bg-violet-50 rounded-xl shadow-violet-400 shadow-xl">
        <div className="space-x-2 p-2 w-full">
          <label className="font-bold">Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            className="p-1 w-[50%] border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-violet-500 focus:border-violet-600"
            value={name}
            onChange={handleNameInputChanges}
          />
        </div>

        <div className="w-full">
          <textarea
            placeholder="Enter Your feedback"
            rows={5}
            cols={5}
            className="border-2 border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-violet-500 focus:border-violet-600"
            onChange={handleFeedbackInputChnages}
          ></textarea>

          <div className="flex mb-4 mt-4">
            {[1, 2, 3, 4, 5].map((star) => {
              return (
                <FaStar
                  key={star}
                  size={20}
                  className={`cursor-pointer transition-colors ${
                    star <= (hover || rating)
                      ? "text-purple-700"
                      : "text-violet-500"
                  }`}
                  onClick={() => {
                    setRating(star);
                  }}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              );
            })}
          </div>

          <button
            className="p-2 bg-violet-400 rounded-lg shadow-lg text-white font-bold transition-transform scale-100 hover:scale-110 hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-500"
            onClick={resetForm}
          >
            Clear Review
          </button>
        </div>

        <div className="mt-5">
          <h3 className="text-lg mb-2">Preview:</h3>
          <hr className="w-full h-1 border-0 bg-gradient-to-tr from-violet-500 via-pink-500 to-purple-500 rounded-lg mb-3 mt-3" />

          <p>
            <strong>Name:</strong> {name || "Not provided"}
          </p>
          <p>
            <strong>Feedback:</strong> {feedback || "No feedback yet"}
          </p>
          <p>
            <strong>Ratings:</strong> {rating || "No ratings"}
          </p>
        </div>
      </div>
    </div>
  );
};

const HandleInput_LocalStorage = () => {
  return (
    <div className="flex justify-center items-center p-5">
      {/* <Example_RememberUsername /> */}
      <Example_FeedbackForm />
    </div>
  );
};

export default HandleInput_LocalStorage;
