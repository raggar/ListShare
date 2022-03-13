import { useState } from "react";

const useForm = (callback, initialState: any) => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState("");

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
    error,
    setError,
  };
};

export default useForm;
