import { authTypes } from "../types/authTypes";
import {
  firebase,
  googleAuthProvider,
} from "../services/firebase/firebase-config";
import {
  finishLoadingAction,
  setErrorAction,
  removeErrorAction,
  startLoadingAction,
} from "./uiActions";

import { clearNotesAfterLogoutAction } from "./notesActions";
export const loginWithEmailAndPasswordAction = (email, password) => {
  return (dispatch) => {
    dispatch(startLoadingAction());
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginAction(user.uid, user.displayName));
        dispatch(finishLoadingAction());
        dispatch(removeErrorAction());
      })
      .catch((error) => {
        dispatch(finishLoadingAction());
        dispatch(setErrorAction(error.message));
      });
  };
};

export const loginWithGoogleProvider = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(loginAction(user.uid, user.displayName));
      });
  };
};

export const registerWithEmailAndPasswordAction = (email, password, name) => {
  return (dispatch) => {
    dispatch(startLoadingAction());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });
        dispatch(loginAction(user.uid, user.displayName));
        dispatch(finishLoadingAction());
        dispatch(removeErrorAction());
      })
      .catch((error) => {
        dispatch(setErrorAction(error.message));
        dispatch(finishLoadingAction());
      });
  };
};

export const loginAction = (uid, displayName) => {
  return {
    type: authTypes.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLogoutAction = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logoutAction());
    dispatch(clearNotesAfterLogoutAction());
  };
};

export const logoutAction = () => {
  return {
    type: authTypes.logout,
  };
};
