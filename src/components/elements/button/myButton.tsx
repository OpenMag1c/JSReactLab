import React, { FC } from "react";
import classes from "./myButton.module.scss";

interface ButtonProps {
  style?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text?: string;
}

const MyButton: FC<ButtonProps> = ({ onClick, style, text, children }) => (
  <button type="submit" className={style} onClick={onClick}>
    {children}
    {text}
  </button>
);

MyButton.defaultProps = {
  style: classes.button,
  text: "",
  onClick: undefined,
};

export default MyButton;
