import { uiTypes } from "../types/uiTypes";

const initialState = {
  loading: false,
  error: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiTypes.uiSetError:
      return {
        ...state,
        error: action.payload,
      };
    case uiTypes.uiRemoveError:
      return {
        ...state,
        error: null,
      };
    case uiTypes.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case uiTypes.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
