import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

const Cards = () => {
  const store = useSelector((store) => store.addTheNote);
  console.log(store);
  return (
    <div className="card">
      {store?.notes.map((curElem) => {
        return (
          <div className="card-text">
            <div className="input-filds">
              <h2 className="card-title">{curElem.title}</h2>
              <p className="card-text-area">{curElem.textArea}</p>
            </div>
            <button className="dlt-btn">
              <AiFillDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
