import React from "react";
import Sidebar from "../../components/Sidebar";
import Note from "../../components/Note";
import NothingSelected from "../../components/NothingSelected";
import { useSelector } from "react-redux";

export default function JournalPage() {
  const { activeNote } = useSelector((state) => state.notes);
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>{activeNote ? <Note /> : <NothingSelected />}</main>
    </div>
  );
}
