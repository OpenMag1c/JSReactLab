import { FC } from "react";
import { v4 as uuid } from "uuid";
import classes from "./textBigField.module.scss";

interface TextBigFieldProps {
  title: string;
}

const TextBigField: FC<TextBigFieldProps> = ({ title }) => {
  const id = uuid();
  return (
    <div className={classes.bigField}>
      {title}
      <textarea className={classes.bigField__input} id={id} />
    </div>
  );
};

export default TextBigField;
