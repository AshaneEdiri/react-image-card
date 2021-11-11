import React from "react";
import "./ImageCard.css";
import { Link } from "react-router-dom";

const ImageCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "img-card"
  }, props.nextpath ? /*#__PURE__*/React.createElement(Link, {
    className: "imagelink",
    to: props.nextpath
  }, /*#__PURE__*/React.createElement("img", {
    className: "img",
    src: props.imageSrc
  }), /*#__PURE__*/React.createElement("div", {
    class: "card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, props.cardtitle), /*#__PURE__*/React.createElement("div", {
    className: "card-text"
  }, props.carddescription), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, props.cardbody))) : /*#__PURE__*/React.createElement("div", {
    className: "default-card"
  }, /*#__PURE__*/React.createElement("img", {
    className: "img",
    src: props.imageSrc
  }), /*#__PURE__*/React.createElement("div", {
    class: "card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, props.cardtitle), /*#__PURE__*/React.createElement("div", {
    className: "card-text"
  }, props.carddescription), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, props.cardbody))));
};

export default ImageCard;