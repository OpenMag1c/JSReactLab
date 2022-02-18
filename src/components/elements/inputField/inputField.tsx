import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";
import classes from "./inputField.module.scss";

interface InputFieldProps {
  name: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegisterReturn;
  type: string;
}

const InputField: FC<InputFieldProps> = ({ name, register, errors, type }) => (
  <div className={classes.input}>
    <label htmlFor={classes.input__field}>{name}</label>
    <input className={classes.input__field} type={type} {...register} />
    <label className={classes.input__error} htmlFor={classes.input__field}>
      {errors[name] && (
        <p>
          <i className="fa-solid fa-circle-exclamation icon" />
          {errors[name]?.message || "Error!"}
        </p>
      )}
    </label>
  </div>
);

export default InputField;
