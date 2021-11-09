import React from "react";
import "./ImageCard.css";
import { Link } from "react-router-dom";

const ImageCard = (props) => {
  return (
    <div className="img-card">
      <Link className="imagelink" to={props.nextpath}>
        <img className="img" src={props.imageSrc} />
        <div class="card-body">
          <div className="card-title">{props.title}</div>
          <div className="card-text">{props.text}</div>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
