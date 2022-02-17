import { RegisterOptions } from "react-hook-form";

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
    value: /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/,
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
    value: /(?=.*[0-9])^[a-zA-Z](.[a-zA-Z0-9_-]*)$/,
    message: "Not valid password!",
  },
};
