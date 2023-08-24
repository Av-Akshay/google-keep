export const addNotes = (note) => {
  return { type: "ADD_NOTE", payload: note };
};

export const deleteNote = (id) => {
  return { type: "DELETE_NOTE", payload: id };
};

export const editNoteId = (id) => {
  return { type: "EDIT_NOTE_ID", payload: id };
};

export const editNoteData = (editData) => {
  return { type: "EDIT_NOTE_DATA", payload: editData };
};

export const addEditDatat = (addData) => {
  return { type: "ADD_EDIT_DATA", payload: addData };
};
