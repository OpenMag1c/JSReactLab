import { RegisterOptions } from "react-hook-form";
import { regularLogin, regularPassword } from "@/constants/regular";

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
    value: regularLogin,
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
    value: regularPassword,
    message: `Password should contain at least one numeric digit, one uppercase and one lowercase letter!`,
  },
};

export const repeatPassword = (password: string): RegisterOptions => ({
  validate: (value) => value === password || "The passwords do not match",
});
