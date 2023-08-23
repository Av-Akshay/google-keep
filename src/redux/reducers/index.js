import { v4 as uuidv4 } from "uuid";

const initialState = {
  notes: [],
};

const addTheNote = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, { ...action.payload, id: uuidv4() }],
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state?.notes?.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
export default addTheNote;
