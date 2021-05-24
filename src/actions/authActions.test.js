import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { authTypes } from "../types/authTypes";
import { notesTypes } from "../types/notesTypes";
import { uiTypes } from "../types/uiTypes";
import {
  loginAction,
  loginWithEmailAndPasswordAction,
  logoutAction,
  startLogoutAction,
} from "./authActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {
    uid: "TEST_UID",
  },
  notes: {
    activeNote: {
      id: "0Myq51zzzlNnrZtwcYe4",
      title: "hello",
      body: "world",
    },
  },
};

let store = mockStore(initialState);

describe("Pruebas en authAction", () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("login y logout debe de crear la accion respectiva ", () => {
    const user = {
      uid: "ABC123",
      displayName: "Luis Miguel",
    };

    const login = loginAction(user.uid, user.displayName);

    const logout = logoutAction();

    expect(login).toEqual({
      type: authTypes.login,
      payload: {
        uid: user.uid,
        displayName: user.displayName,
      },
    });

    expect(logout).toEqual({
      type: authTypes.logout,
    });
  });

  test("startLogoutAction debe llamar logoutAction", async () => {
    await store.dispatch(startLogoutAction());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: authTypes.logout });
    expect(actions[1]).toEqual({ type: notesTypes.clearNoteAfterLogout });
  });

  test("loginWithEmailAndPasswordAction debe de iniciar ", async () => {
    const user = {
      email: "admin@admin.com",
      password: "adminadmin",
    };
    await store.dispatch(
      loginWithEmailAndPasswordAction(user.email, user.password)
    );

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: uiTypes.uiStartLoading,
    });

    expect(actions[1]).toEqual({
      type: authTypes.login,
      payload: { uid: "RCSq3hpiUETpEdReNdF3tPhHInp2", displayName: null },
    });
  });
});
