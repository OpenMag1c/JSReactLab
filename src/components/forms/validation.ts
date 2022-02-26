import { RegisterOptions } from "react-hook-form";

export const regLogin = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/;
export const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;

export const loginValidation: RegisterOptions = {
  required: "Can't be empty!",
  minLength: {
    value: 5,
    message: "Should be more than 5 symbols",
  },
  maxLength: {
    value: 15,
    message: "Should be less than 15 symbols",
  },
  pattern: {
    value: regLogin,
    message: "Wrong symbols!",
  },
};

export const passwordValidation: RegisterOptions = {
  required: "Can't be empty!",
  minLength: {
    value: 5,
    message: "Should be more than 5 symbols",
  },
  maxLength: {
    value: 20,
    message: "Should be less than 20 symbols",
  },
  pattern: {
    value: regPassword,
    message: `Password should contain at least one numeric digit, one uppercase and one lowercase letter!`,
  },
};
