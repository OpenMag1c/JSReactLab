import { FC } from "react";
import { v4 as uuid } from "uuid";
import classes from "./textField.module.scss";

interface TextFieldProps {
  title: string;
}

const TextField: FC<TextFieldProps> = ({ title }) => {
  const id = uuid();
  return (
    <div className={classes.field}>
      {title}
      <input className={classes.field__input} id={id} type="text" />
    </div>
  );
};

export default TextField;
