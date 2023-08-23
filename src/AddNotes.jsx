import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddNotes = () => {
  return (
    <div className="Editnote">
      <form action="">
        <input type="text" placeholder=" Title" />
        <textarea cols="30" rows="8" placeholder="Write a note.."></textarea>
        <button>
          {/* <AiFillEdit /> */}
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};
export default AddNotes;
