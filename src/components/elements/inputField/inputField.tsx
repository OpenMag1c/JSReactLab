import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";
import { v4 as uuid } from "uuid";
import classes from "./inputField.module.scss";
import { IconError } from "@/components/elements/icons/icons";

interface InputFieldProps {
  name: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegisterReturn;
  type: string;
}

const InputField: FC<InputFieldProps> = ({ name, register, errors, type }) => {
  const id = uuid();
  return (
    <div className={classes.input}>
      <input className={classes.input__field} id={id} placeholder={name} type={type} {...register} />
      <label className={classes.input__error} htmlFor={id}>
        {errors[name] && (
          <p>
            <IconError />
            {errors[name]?.message || "Error!"}
          </p>
        )}
      </label>
    </div>
  );
};

export default InputField;
