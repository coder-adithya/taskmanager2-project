import React from "react";
import axios from "axios";

function TaskList({ tasks, fetchTasks, setEditingTask }) {
  const handleDelete = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    fetchTasks();
  };

  const toggleStatus = async (task) => {
    await axios.put(`/api/tasks/${task._id}`, {
      ...task,
      status: task.status === "Pending" ? "Completed" : "Pending",
    });
    fetchTasks();
  };

  return (
    <table border="1" cellPadding="10" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
              <button onClick={() => toggleStatus(task)}>{task.status}</button>
            </td>
            <td>
              <button onClick={() => setEditingTask(task)}>Edit</button>
              <button onClick={() => handleDelete(task._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
