import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoProfile from "./TodoProfile";
import NotFoundPage from "./404Page";
import TodoProvider from "./TodoGlobalProps";
import TodoHome from "./TodoHome";

const TodoApp = () => {
  return (
    <div>
      {/* provider */}
      <TodoProvider>
        {/* consumers */}

        {/* Router DOM */}
        <Router>
          {/* navigation menus */}
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/todos"}>Todo's</Link>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<TodoHome />} />
            <Route path="/todos" element={<TodoProfile />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </TodoProvider>
    </div>
  );
};

export default TodoApp;
