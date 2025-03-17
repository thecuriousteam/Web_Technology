import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState({
    todo_id: Date.now(),
    todo_name: "",
    todo_status: "",
    todo_priority: "",
    todo_createdAt: new Date().toLocaleString(),
  });

  const updateTodoFunction = (todoListInput) => {
    setTodoList({ ...todoList, ...todoListInput });
  };

  return (
    <TodoContext.Provider value={{ todoList, updateTodoFunction }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
