import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { addNotes } from "./redux/actions";
import { useDispatch } from "react-redux";

const AddNotes = () => {
  const dispatch = useDispatch();

  const [note, setNote] = useState({
    title: "",
    textArea: "",
  });

  const addNote = (event) => {
    const { name, value } = event.target;
    setNote((oldValue) => {
      return {
        ...oldValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="Editnote">
      <form action="">
        <input
          type="text"
          placeholder=" Title"
          name="title"
          value={note.title}
          onChange={addNote}
        />
        <textarea
          cols="30"
          rows="8"
          name="textArea"
          value={note.textArea}
          onChange={addNote}
          placeholder="Write a note.."
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
            setNote({
              title: "",
              textArea: "",
            });
            dispatch(addNotes(note));
          }}
        >
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};
export default AddNotes;
