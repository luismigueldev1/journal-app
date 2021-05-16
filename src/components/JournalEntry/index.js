import React from "react";

export default function JournalEntry({ entry }) {
  return (
    <div className="journal__entry mr-1 pointer">
      <div className="journal__entry-picture"></div>
      <div className="journal__entry-body">
        <h3 className="journal__entry-title">Un nuevo dia</h3>
        <p className="journal__entry-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
}
