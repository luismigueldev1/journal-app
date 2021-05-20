import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../services/firebase/firebase-config";
import JournalPage from "../pages/JournalPage";
import AuthRouter from "./AuthRouter";

import { loginAction } from "../actions/authActions";
import Loader from "../components/Loader";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { startGetNotes } from "../actions/notesActions";

export default function AppRouter() {
  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(loginAction(user.uid, user.displayName));
        setIsLogged(true);
        dispatch(startGetNotes());
      } else {
        setIsLogged(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLogged]);

  if (checking) {
    return <Loader />;
  }

  return (
    <Router>
      <Switch>
        <PublicRoute path="/auth" component={AuthRouter} isAuth={isLogged} />

        <PrivateRoute
          exact
          path="/"
          component={JournalPage}
          isAuth={isLogged}
        />

        <Redirect exact to="/" />
      </Switch>
    </Router>
  );
}
