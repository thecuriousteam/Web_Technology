import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

// Note - useEffect used to handle the side effects of functional component, runs when the component renders/mounted, [] - no dependency array means it will run only once, [dependency] - dependency array means it will run whenever dependencies changes

// simple example
const SyntaxExample = () => {
  // useEffect Syntax

  useEffect(() => {
    // side effect code
    console.log("Effect: Component is mounted");

    return () => {
      // code cleanup
      console.log("Effect: Component is unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
};

// counter example
const CounterExample = () => {
  const [count, setCount] = useState(0);

  // useEffect here makes side effect when the count changes
  useEffect(() => {
    console.log(`Count Changed ${count}`);
  }, [count]); //useEffect is running every time when the count value changes

  return (
    <div>
      <div>
        <p>Count Value: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

// useEffect with cleanup function
const SecondsExample = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // set interval syntax
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    console.log("Present Seconds", seconds);
    return () =>
      // clear the interval
      clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      <p>Seconds:{seconds}</p>
    </div>
  );
};

// useEffect with API Response Fetch
const APIFetch = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <p>Users Data</p>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <ol>
          {users.map((eachUser) => (
            <li key={eachUser.id}>
              {eachUser.name} - {eachUser.email}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

const AnalogClock = () => {
  const [time, setTime] = useState("HH-MM-SS PM/AM");

  // useEffect with setInterval to render and change seconds when component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = new Date();
      setTime(updatedTime.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tl from-violet-500 via-violet-700 to-purple-600 p-2 backdrop-blur-2xl">
        <h1 className="text-[40px] sm:text-[40px] md:text-[100px] lg:text-[200px] gap-2 font-bold text-white flex justify-center items-center font-mono p-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          <FiClock className="animate-pulse duration-1000 delay-500 p-2 border-2 border-white rounded-full" />
          {time}
        </h1>
      </div>
    </div>
  );
};

const JSX_useEffectRevamp = () => {
  return (
    <>
      {/* <SyntaxExample /> */}
      {/* <CounterExample /> */}
      {/* <SecondsExample /> */}
      {/* <APIFetch /> */}
      <AnalogClock />
    </>
  );
};

export default JSX_useEffectRevamp;
