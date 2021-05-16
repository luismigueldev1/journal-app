import React from "react";

export default function NoteAppBar() {
  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>
      <div>
        <button className="notes__button mr-1 ">Picture</button>

        <button className="notes__button">Save</button>
      </div>
    </div>
  );
}
