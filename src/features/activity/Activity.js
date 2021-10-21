import React from "react";
import "./activity.css";
const Activity = ({ activity }) => {
  return (
    <div className="activity__container">
      <img
        src={activity.image}
        alt={activity.image}
        className="activity__img"
      />
      <h3 className="activity__name">{activity.name}</h3>
      <div
        className="activity__description"
        dangerouslySetInnerHTML={{ __html: activity.description }}
      />
    </div>
  );
};

export default Activity;
