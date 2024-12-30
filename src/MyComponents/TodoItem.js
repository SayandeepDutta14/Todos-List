import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <p className="card-text">
          <strong>Start Time:</strong> {todo.startTime || "Not Provided"} <br />
          <strong>End Time:</strong> {todo.endTime || "Not Provided"}
        </p>
        {/* <p className="card-text">
          <strong>Task Date:</strong> {todo.date || "Not Provided"}
        </p> */}
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
