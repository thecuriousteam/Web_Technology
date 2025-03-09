import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import { FiList, FiTrash } from "react-icons/fi";
import todo from "../../../../../assets/todo.png";
import AddTodoComponent from "./AddTodo";

const TodoList = () => {
  const { filterTodo, removeTodo, toggleTaskCompletion } =
    useContext(TodoContext);

  return (
    <div className="mt-10">
      <div>
        <div className="flex justify-center items-center p-2">
          <h1 className="text-3xl flex gap-2 justify-center items-center">
            Your Customized Todo List <FiList />
          </h1>
        </div>

        <div>
          {filterTodo.length === 0 ? (
            <div className="p-2 flex justify-center items-center">
              <img src={todo} alt="todo" className="w-[700px] h-[500px]" />
            </div>
          ) : (
            <div className="overflow-auto">
              <table className="w-full border-collapse border border-violet-400 rounded-lg shadow-md">
                <thead>
                  <tr>
                    <th className="p-3">✅ Status</th>
                    <th className="p-3">📋 Task</th>
                    <th className="p-3">⚙️ Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filterTodo.map((task) => (
                    <tr
                      key={task.id}
                      className="border-b hover:bg-violet-300 transistion"
                    >
                      <td className="p-3 text-center">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleTaskCompletion(task.id)}
                          className="w-5 h-5"
                        />
                      </td>

                      <td
                        className={`p-3 text-center ${
                          task.completed
                            ? "line-through text-gray-500"
                            : "text-black"
                        }`}
                      >
                        {task.text}
                      </td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => removeTodo(task.id)}
                          className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md transition"
                        >
                          <FiTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
