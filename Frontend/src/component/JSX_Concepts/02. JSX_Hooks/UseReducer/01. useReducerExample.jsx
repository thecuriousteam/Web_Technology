import React, { useReducer, useState } from "react";

const UseReducerExample1 = () => {
  // this is for the useState()
  // const [count, setCount] = useState(0);

  // useReducer() we write like this
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "Increment") {
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
  };
  const initialValue = { count: 0 };
  // count -> current state
  // dispatch -> function: sends action to the reducer function
  // reducer -> function: it takes 2 parameters state, action
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>Use Reducer Hook</h1>

      <h1>
        {/* we need count value */}
        {count}
      </h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
};

const UseReducerExample2 = () => {
  let initialValue = { count: 0 };
  const reducer = (state, action) => {
    if (action.type === "Increment") {
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
};

const UseReducerExample = () => {
  return (
    <div>
      {/* <UseReducerExample1 /> */}
      <UseReducerExample2 />
    </div>
  );
};

export default UseReducerExample;
