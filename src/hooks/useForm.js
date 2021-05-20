import { useState } from "react";

export function useForm(initialState = {}) {
  const [values, setValues] = useState(initialState);
  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return [values, handleInputChange, reset];
}
