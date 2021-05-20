import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeNoteAction,
  deleteNoteOnFirebaseAction,
} from "../../actions/notesActions";
import { useForm } from "../../hooks/useForm";
import NoteAppBar from "../NoteAppBar";

function Note() {
  const { activeNote } = useSelector((state) => state.notes);
  const [values, handleInputChange, reset] = useForm(activeNote);
  const activeId = useRef(activeNote.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeNote.id !== activeId.current) {
      reset(activeNote);
      activeId.current = activeNote.id;
    }
  }, [activeNote, reset]);

  useEffect(() => {
    dispatch(activeNoteAction(values.id, { ...values }));
  }, [values, dispatch]);

  const handleDelete = () => {
    dispatch(deleteNoteOnFirebaseAction(values.id));
  };

  return (
    <div className="notes__main-content">
      <NoteAppBar />

      <div className="notes__content">
        <input
          name="title"
          type="text"
          placeholder="Some awesome title"
          autoComplete="off"
          value={values.title}
          onChange={handleInputChange}
        />

        <textarea
          name="body"
          placeholder="what happend today? "
          value={values.body}
          onChange={handleInputChange}
        />
      </div>

      {activeNote.url && (
        <div className="notes__image">
          <img src={activeNote.url} alt="journal" />
        </div>
      )}

      <button className="btn btn-danger pointer" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Note;
