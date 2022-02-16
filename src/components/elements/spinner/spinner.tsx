import { FC } from "react";
import classes from "./spinner.module.scss";

const Spinner: FC = () => (
  <svg className={classes.spinner} viewBox="0 0 50 50">
    <circle className={classes.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
  </svg>
);

export default Spinner;
