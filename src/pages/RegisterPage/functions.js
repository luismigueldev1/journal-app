import validator from "validator";
import { setErrorAction, removeErrorAction } from "../../actions/uiActions";

export const isFormValid = (dispatch, values) => {
  const { name, email, password, password2 } = values;
  if (name.trim().length === 0) {
    dispatch(setErrorAction("Name is required"));
    return false;
  } else if (!validator.isEmail(email)) {
    dispatch(setErrorAction("Email is not valid"));
    return false;
  } else if (password !== password2 || password.length < 5) {
    dispatch(
      setErrorAction(
        "Password should be at least 6 characters and match each others"
      )
    );

    return false;
  }
  dispatch(removeErrorAction());
  return true;
};
