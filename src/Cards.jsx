import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote, editNoteId, editNoteData } from "./redux/actions";

const Cards = (props) => {
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
            <div className="btn-icons">
              <button
                className="dlt-btn"
                onClick={() => {
                  dispatch(deleteNote(curElem.id));
                }}
              >
                <AiFillDelete />
              </button>
              <button className="edit-icon">
                <AiFillEdit
                  onClick={() => {
                    dispatch(editNoteId(curElem.id));
                    dispatch(
                      editNoteData({
                        title: curElem.title,
                        textArea: curElem.textArea,
                      })
                    );
                  }}
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
