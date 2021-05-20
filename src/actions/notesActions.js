import { db } from "../services/firebase/firebase-config";
import { notesTypes } from "../types/notesTypes";
import { getNotes } from "../helpers/getNotes";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const addNewEntryAction = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNoteAction(doc.id, newNote));
    dispatch(addNewNoteAction(doc.id, newNote));
  };
};

export const activeNoteAction = (id, note) => {
  return {
    type: notesTypes.activeNote,
    payload: {
      id,
      ...note,
    },
  };
};

export const addNewNoteAction = (id, note) => {
  return {
    type: notesTypes.addNewEntry,
    payload: {
      id,
      ...note,
    },
  };
};

export const startGetNotes = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const notes = await getNotes(uid);
    dispatch(getNotesAction(notes));
  };
};

export const getNotesAction = (notes) => {
  return {
    type: notesTypes.getNotes,
    payload: notes,
  };
};

export const saveNoteOnFirebase = (note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

    dispatch(refreshNoteAction(note.id, note));
    Swal.fire("Saved", note.title, "success");
  };
};

export const refreshNoteAction = (id, note) => {
  return {
    type: notesTypes.updateNote,
    payload: {
      id,
      note: {
        id,
        ...note,
      },
    },
  };
};

export const uploadToCloudinaryAction = (file) => {
  return async (dispatch, getState) => {
    const { activeNote } = getState().notes;

    Swal.fire({
      title: "Uploading",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const image_url = await fileUpload(file);
    activeNote.url = image_url;
    console.log(activeNote);

    dispatch(saveNoteOnFirebase(activeNote));
    Swal.close();
  };
};

export const deleteNoteOnFirebaseAction = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    await db.doc(`${uid}/journal/notes/${id}`).delete();

    dispatch(deleteNoteAction(id));
  };
};

export const deleteNoteAction = (id) => {
  return {
    type: notesTypes.deleteNote,
    payload: id,
  };
};

export const clearNotesAfterLogoutAction = () => {
  return {
    type: notesTypes.clearNoteAfterLogout,
  };
};
