import { uiTypes } from "../types/uiTypes";

export const setErrorAction = (error) => ({
  type: uiTypes.uiSetError,
  payload: error,
});

export const removeErrorAction = () => ({
  type: uiTypes.uiRemoveError,
});

export const startLoadingAction = () => ({
  type: uiTypes.uiStartLoading,
});

export const finishLoadingAction = () => ({
  type: uiTypes.uiFinishLoading,
});
