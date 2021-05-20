import { notesTypes } from "../types/notesTypes";

const initialState = {
  notes: [],
  activeNote: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case notesTypes.activeNote:
      return {
        ...state,
        activeNote: {
          ...action.payload,
        },
      };

    case notesTypes.addNewEntry:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case notesTypes.getNotes:
      return {
        ...state,
        notes: [...action.payload],
      };

    case notesTypes.updateNote:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };

    case notesTypes.deleteNote:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        activeNote: null,
      };

    case notesTypes.clearNoteAfterLogout:
      return {
        ...state,
        notes: [],
        activeNote: null,
      };
    default:
      return state;
  }
};
