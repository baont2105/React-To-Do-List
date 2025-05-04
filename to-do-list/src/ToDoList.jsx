import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Học React", "Đi kiếm việc"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    } else {
      alert("Please type your task!");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="container py-5">
      <div className="card bg-dark text-white">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">TO DO LIST</h1>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a task..."
              value={newTask}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary" onClick={addTask}>
              Add Task
            </button>
          </div>

          <ol className="list-group list-group-numbered">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span style={{ color: "#212529" }}>{task}</span>
                <div className="btn-group">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => moveTaskUp(index)}
                  >
                    ↑
                  </button>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => moveTaskDown(index)}
                  >
                    ↓
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
