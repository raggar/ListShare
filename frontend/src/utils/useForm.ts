import { useState } from "react";

const useForm = (callback, initialState: any) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<string[]>([]);

  // modify corresponding values
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // when form is submitted dont refresh
  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
    errors,
    setErrors,
  };
};

export default useForm;
