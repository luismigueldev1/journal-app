import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveNoteOnFirebase,
  uploadToCloudinaryAction,
} from "../../actions/notesActions";

export default function NoteAppBar() {
  const dispatch = useDispatch();
  const { activeNote } = useSelector((state) => state.notes);

  const handleSaveNote = () => {
    dispatch(saveNoteOnFirebase({ ...activeNote, url: "" }));
  };

  const handlePictureUpload = () => {
    document.querySelector("#file").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadToCloudinaryAction(file));
    }
  };
  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>
      <input
        type="file"
        style={{ display: "none" }}
        id="file"
        name="file"
        onChange={handleFileChange}
      />
      <div>
        <button className="notes__button mr-1 " onClick={handlePictureUpload}>
          Picture
        </button>

        <button className="notes__button" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
}
