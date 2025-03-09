// Creating Providers

import { useState } from "react";
import TodoContext from "./TodoContext";

export const TodoProvider = ({ children }) => {
  // Storage With Default Elements
  const todoStorage = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do App", completed: true },
    { id: 3, text: "Learn Context API", completed: false },
  ];
  const [todo, setTodo] = useState(todoStorage);
  const [filter, setFilter] = useState("all");

  // adding todo
  const addTodo = (task) => {
    setTodo([...todo, { id: Date.now(), text: task, completed: false }]);
  };

  // remove todo
  const removeTodo = (taskId) => {
    setTodo(todo.filter((eachTodoId) => eachTodoId.id !== taskId));
  };

  // filter todo based on completed or not completed
  const filterTodo = todo.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "pending") {
      return !task.completed;
    }
    return true;
  });

  // toggle completed or not
  const toggleTaskCompletion = (taskId) => {
    // Map on each task, if the id matches then update the completed status elase task
    setTodo(
      todo.map((task) =>
        task.id === taskId ? { ...todo, completed: !task.completed } : task
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        addTodo,
        removeTodo,
        filterTodo,
        toggleTaskCompletion,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
