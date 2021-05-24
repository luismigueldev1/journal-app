import { uiTypes } from "../types/uiTypes";
import {
  finishLoadingAction,
  removeErrorAction,
  setErrorAction,
  startLoadingAction,
} from "./uiActions";

describe("Pruebas en uiActions", () => {
  test("todas las acciones deben de funcionar", () => {
    const setErrorActionTest = setErrorAction("HELP!");
    expect(setErrorActionTest).toEqual({
      type: uiTypes.uiSetError,
      payload: "HELP!",
    });

    const removeErrorActionTest = removeErrorAction();
    expect(removeErrorActionTest).toEqual({
      type: uiTypes.uiRemoveError,
    });

    const startLoadingActionTest = startLoadingAction();
    expect(startLoadingActionTest).toEqual({
      type: uiTypes.uiStartLoading,
    });

    const finishLoadingActionTest = finishLoadingAction();
    expect(finishLoadingActionTest).toEqual({
      type: uiTypes.uiFinishLoading,
    });
  });
});
