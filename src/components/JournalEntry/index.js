import React from "react";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { activeNoteAction } from "../../actions/notesActions";

export default function JournalEntry({ note, handleMenuMobile }) {
  const date = dayjs(note.date);
  const dispatch = useDispatch();

  const handleActiveNote = () => {
    dispatch(activeNoteAction(note.id, note));
    handleMenuMobile((prevState) => !prevState);
  };
  return (
    <div className="journal__entry mr-1 pointer" onClick={handleActiveNote}>
      {note.url ? (
        <div className="journal__entry-picture">
          <img src={note.url} alt={note.title} />
        </div>
      ) : (
        <div className="journal__entry-picture"></div>
      )}
      <div className="journal__entry-body">
        <h3 className="journal__entry-title">{note.title}</h3>
        <p className="journal__entry-content">{note.body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{date.format("MMM")}</span>
        <h4>{date.format("DD")}</h4>
      </div>
    </div>
  );
}
