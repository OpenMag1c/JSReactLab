import React, { FC, useRef } from "react";
import classes from "./textBigField.module.scss";
import { TextFieldProps } from "@/types/types";

const TextBigField: FC<TextFieldProps> = ({ title, changeCard, init = "" }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    changeCard(title, event.target.value);
  };
  return (
    <div className={classes.bigField}>
      {title}
      <textarea ref={inputRef} value={init} className={classes.bigField__input} onChange={onInputChange} />
    </div>
  );
};

export default TextBigField;
