import React, { FC, useEffect, useRef, useState } from "react";
import classes from "../textField/textField.module.scss";
import { TextFieldProps } from "@/types/types";

const ImageField: FC<TextFieldProps> = ({ title, changeCard, init = "" }) => {
  const [value, setValue] = useState<string | number>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(init);
  }, [init]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeCard(title, event.target.value);
  };

  return (
    <div className={classes.field}>
      {title}
      <input
        ref={inputRef}
        value={value}
        className={classes.field__input}
        type="text"
        onInput={onInputBlur}
        onChange={onInputChange}
      />
    </div>
  );
};

export default ImageField;
