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

const ShoppingAppLication = () => {
  // initialize the  useReducer() state
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "Add_Item":
        return { ...state, cart: [...state.cart, action.payload] };

      case "Remove_Item":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case "Clear_Cart":
        return { ...state, cart: [] };

      default:
        return state;
    }
  };

  const initialValue = { cart: [] };
  const [state, dispatch] = useReducer(cartReducer, initialValue);

  const addItem = () => {
    dispatch({ type: "Add_Item", payload: { id: 1, name: "Laptop" } });
  };

  const removeItem = () => {
    dispatch({ type: "Remove_Item", payload: { id: 1 } });
  };

  const clearCart = () => {
    dispatch({ type: "Clear_Cart" });
  };

  // reducer logic
  return (
    <div>
      <div>
        <h2>Shopping Cart</h2>
        {state.cart.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}

        <div className="space-x-4">
          <button onClick={addItem}>Add Item</button>
          <button onClick={removeItem}>Remove Item</button>
          <button onClick={clearCart}>Clear</button>
        </div>
      </div>
    </div>
  );
};

const TodoApplication = () => {
  // reducer creation
  const todoReducer = (state, action) => {
    switch (action.type) {
      case "Add_todo":
        return { ...state, todos: [...state.todos, action.payload] };

      case "Remove_Todo":
        return {
          ...state,
          todos: state.todos.filter((item) => item.id !== action.payload.id),
        };

      case "Clear_Todo":
        return { ...state, todos: [] };

      default:
        return state;
    }
  };

  // initialValue = {todos:[]}
  const initialValue = { todos: [] };

  // state initialization
  const [state, dispatch] = useReducer(todoReducer, initialValue);

  const addTodo = () => {
    dispatch({
      type: "Add_todo",
      payload: { id: 1, name: "Learn React", priority: "High" },
    });
  };

  const removeTodo = () => {
    dispatch({ type: "Remove_Todo", payload: { id: 1 } });
  };

  const clearTodo = () => {
    dispatch({ type: "Clear_Todo", payload: [] });
  };

  return (
    <div>
      <div>
        <h1>Todo Application</h1>
        <div>
          {state.todos.map((item) => (
            <li key={item.id}>
              Todo Name: {item.name} - Todo Priority: {item.priority}
            </li>
          ))}
        </div>

        <div className="space-x-4">
          <button onClick={addTodo}>Add Todo</button>
          <button onClick={removeTodo}>Remove Todo</button>
          <button onClick={clearTodo}>Clear Todo</button>
        </div>
      </div>
    </div>
  );
};

const UseReducerExample = () => {
  return (
    <div>
      {/* <UseReducerExample1 /> */}
      {/* <UseReducerExample2 /> */}
      {/* <ShoppingAppLication /> */}
      <TodoApplication />
    </div>
  );
};

export default UseReducerExample;
