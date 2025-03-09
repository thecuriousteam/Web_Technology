import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import { FiCheckSquare, FiList, FiMinusSquare } from "react-icons/fi";

// consumers
const TodoFilter = () => {
  const { setFilter } = useContext(TodoContext);
  return (
    <div className="w-screen">
      <div className=" flex justify-around items-center mt-20">
        <button
          className="p-3 bg-gradient-to-tr from-violet-600 to-purple-600 text-white font-mono w-[30%] shadow-lg rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 text-xl flex justify-evenly items-center hover:animate-pulse cursor-pointer"
          onClick={() => setFilter("")}
        >
          <FiList className="text-3xl" /> All
        </button>
        <button
          className="p-3 bg-gradient-to-tr from-violet-600 to-purple-600 text-white font-mono w-[30%] shadow-lg rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 text-xl flex justify-evenly items-center hover:animate-pulse cursor-pointer"
          onClick={() => setFilter("pending")}
        >
          <FiMinusSquare className="text-3xl" />
          Pending
        </button>
        <button
          className="p-3 bg-gradient-to-tr from-violet-600 to-purple-600 text-white font-mono w-[30%] shadow-lg rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 text-xl flex justify-evenly items-center hover:animate-pulse cursor-pointer"
          onClick={() => setFilter("completed")}
        >
          <FiCheckSquare className="text-3xl" />
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
