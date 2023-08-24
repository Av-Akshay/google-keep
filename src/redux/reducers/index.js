import { v4 as uuidv4 } from "uuid";

const initialState = {
  notes: [],
  noteId: "",
  btn: true,
  editData: [],
};

const addTheNote = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      if (action.payload.title === "" || action.payload.textArea === "") {
        alert("Please filled the input filds");
      } else {
        return {
          ...state,
          notes: [...state.notes, { ...action.payload, id: uuidv4() }],
        };
      }

    case "DELETE_NOTE":
      return {
        ...state,
        notes: state?.notes?.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case "EDIT_NOTE_ID":
      return {
        ...state,
        noteId: action.payload,
        btn: false,
      };
    case "EDIT_NOTE_DATA":
      return {
        ...state,
        editData: action.payload,
      };
    case "ADD_EDIT_DATA":
      return {
        ...state,
        notes: state?.notes?.map((curItem) => {
          if (curItem.id === state.noteId) {
            return {
              ...curItem,
              title: action.payload.title,
              textArea: action.payload.textArea,
            };
          } else {
            return curItem;
          }
        }),
        btn: true,
      };
    default:
      return state;
  }
};
export default addTheNote;
