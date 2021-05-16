import React from "react";
import NoteAppBar from "../NoteAppBar";

export default function Note() {
  return (
    <div className="notes__main-content">
      <NoteAppBar />

      <div className="notes__content">
        <input
          name="title"
          type="text"
          placeholder="Some awesome title"
          autoComplete="off"
        />

        <textarea name="journal" placeholder="what happend today?"></textarea>
      </div>

      <div className="notes__image">
        <img
          src="https://media.istockphoto.com/vectors/realistic-full-moon-vector-id584764738?s=612x612"
          alt="Moon"
        />
      </div>
    </div>
  );
}
