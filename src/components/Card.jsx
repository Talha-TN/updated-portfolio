import React, { useState } from "react";
import Projects from "./Projects.jsx";
import "../css/card.css";
const Card = ({ servicesdata }) => {
  const [data, setData] = useState(servicesdata);
  const handleDelete = (id) => {
    setData(data.filter((val) => val.id !== id));
  };
  return (
    <>
      {data.length == 0 ? (
        <h1>No Task To Show</h1>
      ) : (
        data.map((val) => (
          <Projects key={val.id} val={val} handleDelete={handleDelete} />
        ))
      )}
    </>
  );
};
export default Card;
