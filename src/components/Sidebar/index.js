import React from "react";
import JournalEntries from "../JournalEntries";

export default function Sidebar() {
  return (
    <div>
      <aside className="journal__sidebar">
        <div className="journal__sidebar-navbar mt-1">
          <h3>
            <i className="far fa-moon mr-1"></i>
            <span>Luis Miguel</span>
          </h3>
          <div className="button-center">
            <button className="btn pointer">Logout</button>
          </div>
        </div>

        <div className="journal__new-entry mt-5 pointer">
          <i className="far fa-calendar-plus fa-5x mb-1"></i>
          <p>New entry</p>
        </div>

        <JournalEntries />
      </aside>
    </div>
  );
}
