import React, { useContext, useState } from "react";
import TodoContext from "./TodoContext";
import { FiPlayCircle, FiPlusCircle, FiPlusSquare } from "react-icons/fi";

// consumer
const AddTodoComponent = () => {
  const { addTodo } = useContext(TodoContext);

  const [task, setTask] = useState("");

  return (
    <div className="w-screen mt-10">
      <div className="flex justify-center items-center gap-2 p-2 w-full shadow-lg rounded-lg bg-violet-50">
        <div className="flex w-[70%] justify-center items-center">
          <label className="w-[20%]">Enter Input Task: </label>
          <textarea
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="Enter your task...."
            className="w-full p-2 border-2 border-violet-500 rounded-lg"
            rows={5}
          />
        </div>
        <div className="bg-violet-500 p-3 rounded-full flex justify-center items-center ">
          <button
            onClick={() => {
              if (task.trim() != "") {
                addTodo(task);
                setTask("");
              }
            }}
          >
            <FiPlusSquare className="text-3xl text-white cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoComponent;
