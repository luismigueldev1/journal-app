import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { mount } from "enzyme";
import LoginPage from ".";
import {
  loginWithGoogleProvider,
  loginWithEmailAndPasswordAction,
} from "../../actions/authActions";
jest.mock("../../actions/authActions", () => {
  return {
    loginWithGoogleProvider: jest.fn(),
    loginWithEmailAndPasswordAction: jest.fn(),
  };
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {},
  ui: { loading: false, error: null },
  notes: [],
};

let store = mockStore(initialState);
store.dispatch = jest.fn();

describe("Pruebas en <LoginScreen/>", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
  );
  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de disparar la accion de loginWithGoogleProvider ", () => {
    wrapper.find(".google-login-button").simulate("click");
    expect(loginWithGoogleProvider).toHaveBeenCalled();
  });

  test("debe de disparar la accion de loginWithEmailAndPasswordAction ", () => {
    wrapper.find("form").simulate("submit");
    expect(loginWithEmailAndPasswordAction).toHaveBeenLastCalledWith(
      "luismiguel@gmail.com",
      "123456"
    );
    expect(loginWithEmailAndPasswordAction).toHaveBeenCalledTimes(1);
  });
});
