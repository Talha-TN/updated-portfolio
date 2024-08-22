import React from "react";
import Card from "./Card";
import "../css/cardservices.css";
const ServicesCard = () => {
  const servicesdata = [
    { id: 1, name: "Web development", details: "view Task" },
    { id: 2, name: "App Development", details: "view Task" },
    { id: 3, name: "AI Development", details: "view Task" },
    { id: 4, name: "BlockChain Development", details: "view Task" },
    { id: 5, name: "Graphic Designing", details: "view Task" },
    { id: 6, name: "IT Services", details: "view Task" },
  ];
  return (
    <div className="services-card">
      <h1 className="services-heading">Pending Tasks</h1>
      <div className="services">
        <Card servicesdata={servicesdata} />
      </div>
    </div>
  );
};
export default ServicesCard;
