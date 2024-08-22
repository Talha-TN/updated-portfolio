import React from "react";
const projects = ({ val, handleDelete }) => {
  return (
    <div className="card" key={val.id}>
      <p className="card-text">{val.name}</p>
      <button className="card-button">{val.details}</button>
      <button
        onClick={() => handleDelete(val.id)}
        className="card-button delete"
      >
        delete Task
      </button>
    </div>
  );
};
export default projects;
