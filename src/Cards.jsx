import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Cards = () => {
  return (
    <div className="card">
      <div className="card-text">
        <h2 className="card-title">hello</h2>
        <p className="card-text-area">i am trying to speak in english</p>
        <button className="dlt-btn">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};
export default Cards;
