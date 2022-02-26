import { FC } from "react";
import classes from "./error.module.scss";
import { IconBigError } from "@/components/elements/icons/icons";

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => (
  <div className={classes.error}>
    <IconBigError />
    <h2 className={classes.error__message}>{message}</h2>
  </div>
);

export default Error;
