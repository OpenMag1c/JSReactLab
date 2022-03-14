import React, { FC, useRef } from "react";
import classes from "./textField.module.scss";
import { TextFieldProps } from "@/types/types";

const TextField: FC<TextFieldProps> = ({ title, changeCard, init = "", type }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeCard(title, event.target.value);
  };

  return (
    <div className={classes.field}>
      {title}
      <input ref={inputRef} value={init} className={classes.field__input} type={type} onChange={onInputChange} />
    </div>
  );
};

export default TextField;
