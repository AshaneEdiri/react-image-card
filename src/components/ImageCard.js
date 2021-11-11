import React from "react";
import "./ImageCard.css";
import { Link } from "react-router-dom";

const ImageCard = (props) => {
  return (
    <div className="img-card">
      {props.nextpath ? (
        <Link className="imagelink" to={props.nextpath}>
          <img className="img" src={props.imageSrc} />
          <div class="card-body">
            <div className="card-title">{props.cardtitle}</div>
            <div className="card-text">{props.carddescription}</div>
            <div className="card-body">{props.cardbody}</div>
          </div>
        </Link>
      ) : (
        <div className="default-card">
          <img className="img" src={props.imageSrc} />
          <div class="card-body">
            <div className="card-title">{props.cardtitle}</div>
            <div className="card-text">{props.carddescription}</div>
            <div className="card-body">{props.cardbody}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
