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
    <input className={classes.input__field} placeholder={name} type={type} {...register} />
    <label className={classes.input__error} htmlFor={classes.input__field}>
      {errors[name] && (
        <p>
          <i className="fa-solid fa-circle-exclamation icError" />
          {errors[name]?.message || "Error!"}
        </p>
      )}
    </label>
  </div>
);

export default InputField;
