import React, { FC } from "react";
import classes from "./myButton.module.scss";

interface ButtonProps {
  style?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit";
  text?: string;
}

const MyButton: FC<ButtonProps> = (props) => {
  const { onClick, style, text, children, type } = props;
  return (
    <button type={type === "submit" ? "submit" : "button"} className={style} onClick={onClick}>
      {children}
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  style: classes.button,
  text: "",
  type: "submit",
  onClick: undefined,
};

export default MyButton;
