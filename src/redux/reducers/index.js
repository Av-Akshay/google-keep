const initialState = {
  notes: [],
};

const addTheNote = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    default:
      return state;
  }
};
export default addTheNote;
