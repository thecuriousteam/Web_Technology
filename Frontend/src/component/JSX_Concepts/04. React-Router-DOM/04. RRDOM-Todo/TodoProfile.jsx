import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoGlobalProps";

const TodoProfile = () => {
  const { todoList, updateTodoFunction } = useContext(TodoContext);
  console.log(">>>", todoList);
  const [editingTodo, setEditing] = useState(false);
  const [updateFields, setUpdateFields] = useState(todoList);

  const handleSaveState = () => {
    updateTodoFunction(updateFields);
    setEditing(false);
  };

  const handleEditState = () => {
    setEditing(true);
  };

  return (
    <div>
      <div>
        <h1>Todo List</h1>
        {editingTodo ? (
          <div>
            {/* taking input */}

            <label>Todo Title:</label>
            <input
              type="text"
              value={updateFields.todo_name}
              placeholder="Enter Todo Title"
              onChange={(event) =>
                setUpdateFields({
                  ...updateFields,
                  todo_name: event.target.value,
                })
              }
            />

            <label>Set Status</label>
            <select
              value={updateFields.todo_status}
              onChange={(event) =>
                setUpdateFields({
                  ...updateFields,
                  todo_status: event.target.value,
                })
              }
            >
              <option value="">Status</option>
              <option value="pending">Pending</option>
              <option value="on-hold">On Hold</option>
              <option value="completed">Completed</option>
            </select>

            <label>Set Priority</label>
            <select
              value={updateFields.todo_priority}
              onChange={(event) =>
                setUpdateFields({
                  ...updateFields,
                  todo_priority: event.target.value,
                })
              }
            >
              <option value="">Select Option</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <button onClick={handleSaveState}>Save Todo</button>
          </div>
        ) : (
          <div>
            <div>
              <p>
                <strong>Todo Id:</strong> {todoList.todo_id}
              </p>
              <p>
                <strong>Title:</strong> {todoList.todo_name}
              </p>
              <p>
                <strong>Status:</strong> {todoList.todo_status}
              </p>
              <p>
                <strong>Priority:</strong> {todoList.todo_priority}
              </p>
              <p>
                <strong>Created At:</strong> {todoList.todo_createdAt}
              </p>

              <button
                onClick={handleEditState}
                className="bg-gray-500 text-white px-4 py-2 rounded mt-3"
              >
                Edit Todo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoProfile;
