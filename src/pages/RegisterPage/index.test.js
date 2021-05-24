import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import RegisterPage from ".";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {},
  ui: { loading: false, error: null },
  notes: [],
};
let store = mockStore(initialState);
//store.dispatch = jest.fn();

describe("Pruebas <RegisterPage/>", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
    </Provider>
  );
  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de hacer el dispatch de la accion respectiva ()", () => {
    const emailField = wrapper.find('input[name="email"]');

    emailField.simulate("change", {
      target: {
        value: "",
        name: "email",
      },
    });
    wrapper.find("form").simulate("submit");

    const actions = store.getActions();
  });
});
