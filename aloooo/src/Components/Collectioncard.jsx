import React from "react";
import "./colletioncard.css";

const Collectioncard = (props) => {
  return (
    <div className="collectioncard">
      <img src={props.pic} alt="punk pic" className="punkpic" />
      <div className="details">
        <div className="name">{props.name}</div>
        <div className="id">.#{props.key}</div>

        <div className="pricecontainer">
          <img src={props.imgs} alt="weth img" className="wethimg" />
          <div className="price">{props.rate}</div>
        </div>
      </div>
    </div>
  );
};

export default Collectioncard;
