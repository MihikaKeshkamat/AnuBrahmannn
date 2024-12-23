import React, { useState } from "react";
import '../App.css';

function SegmentCard({ segment }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`segment-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="card-front">
        <img src={segment.image} alt={segment.name} className="card-image" />
        <h3 className="segment-name">{segment.name}</h3>
      </div>
      <div className="card-back">
        <h3 className="card-title">{segment.title}</h3>
        <p className="card-description">{segment.description}</p>
        <a href={segment.link} target="_blank" rel="noopener noreferrer" className="card-link">
          Click here
        </a>
      </div>
    </div>
  );
}

export default SegmentCard;
