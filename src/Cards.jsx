import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "./redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.addTheNote);

  return (
    <div className="card">
      {store?.notes.map((curElem) => {
        return (
          <div key={curElem.id} className="card-text">
            <div className="input-filds">
              <h2 className="card-title">{curElem.title}</h2>
              <p className="card-text-area">{curElem.textArea}</p>
            </div>
            <button
              className="dlt-btn"
              onClick={() => {
                dispatch(deleteNote(curElem.id));
              }}
            >
              <AiFillDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
