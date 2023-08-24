import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import { addNotes, addEditDatat } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AddNotes = (props) => {
  const dispatch = useDispatch();

  const store = useSelector((store) => store.addTheNote);

  const [note, setNote] = useState({
    title: "",
    textArea: "",
  });
  useEffect(() => {
    if (store.btn === false) {
      setNote(store.editData);
    }
  }, [store]);

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
        {store?.btn ? (
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
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addEditDatat(note));
              setNote({
                title: "",
                textArea: "",
              });
            }}
          >
            <AiFillEdit />
          </button>
        )}
      </form>
    </div>
  );
};
export default AddNotes;
