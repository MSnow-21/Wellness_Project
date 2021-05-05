import React from "react";
import "./Wellness.css";

function WellnessCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Practice:</strong> {props.practice}
          </li>
          <li>
            <strong>Thinkers:</strong> {props.thinkers}
          </li>
          <li>
            <strong>Beliefs:</strong> {props.beliefs}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WellnessCard;
