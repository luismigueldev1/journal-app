import { authTypes } from "../types/authTypes";
import { authReducer } from "./authReducer";

describe("Pruebas en authReducer", () => {
  const actionLogin = {
    type: authTypes.login,
    payload: {
      uid: "1b2c3d4f5g6l",
      displayName: "Luis Miguel",
    },
  };

  test("debe de crear el login correctamente", () => {
    const stateLogin = authReducer({}, actionLogin);
    expect(stateLogin).toEqual({
      uid: "1b2c3d4f5g6l",
      name: "Luis Miguel",
    });
  });

  test("debe de hacer el logout y limpiar el state", () => {
    const actionLogout = {
      type: authTypes.logout,
    };
    const stateLogout = authReducer(
      { uid: "1b2c3d4f5g6l", name: "Luis Miguel" },
      actionLogout
    );
    expect(stateLogout).toEqual({});
  });

  test("debe de retornar el estado por defecto", () => {
    const stateDefault = authReducer({}, {});
    expect(stateDefault).toEqual({});
  });
});
