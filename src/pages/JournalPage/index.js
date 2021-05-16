import React from "react";
import Sidebar from "../../components/Sidebar";
import Note from "../../components/Note";

export default function JournalPage() {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        <Note />
      </main>
    </div>
  );
}
