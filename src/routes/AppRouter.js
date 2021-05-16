import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import JournalPage from "../pages/JournalPage";
import AuthRouter from "./AuthRouter";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <Route exact path="/" component={JournalPage} />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
}
