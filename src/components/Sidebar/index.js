import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogoutAction } from "../../actions/authActions";
import { addNewEntryAction } from "../../actions/notesActions";
import JournalEntries from "../JournalEntries";

export default function Sidebar() {
  const [toogleMobile, setToogleMobile] = useState(false);
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(startLogoutAction());
  };

  const handleAddEntry = () => {
    dispatch(addNewEntryAction());
    setToogleMobile(!toogleMobile);
  };

  const handleMenuMobile = () => {
    setToogleMobile(!toogleMobile);
  };
  return (
    <div>
      <button
        onClick={handleMenuMobile}
        className={
          toogleMobile
            ? "journal__sidebar-toogleMobile active"
            : "journal__sidebar-toogleMobile "
        }
      >
        <i
          className={toogleMobile ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"}
        ></i>
      </button>
      <aside
        className={
          toogleMobile ? "journal__sidebar active" : "journal__sidebar"
        }
      >
        <div className="journal__sidebar-navbar mt-1">
          <h3>
            <i className="far fa-moon mr-1"></i>
            <span>{name}</span>
          </h3>
          <div className="button-center">
            <button className="btn pointer" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div
          className="journal__new-entry mt-5 pointer"
          onClick={handleAddEntry}
        >
          <i className="far fa-calendar-plus fa-5x mb-1"></i>
          <p>New entry</p>
        </div>

        <JournalEntries handleMenuMobile={handleMenuMobile} />
      </aside>
    </div>
  );
}
