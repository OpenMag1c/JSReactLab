import { FC, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import classes from "../form.module.scss";
import InputField from "@/components/elements/input/inputField/inputField";
import { loginValidation, passwordValidation, repeatPassword } from "@/components/forms/validation";
import IUser from "@/types/IUser";
import { apiRegister } from "@/api/api";
import useActions from "@/hooks/useActions";

interface IFormValues extends IUser {
  "repeat password": string;
}

const SignUp: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm<IFormValues>({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const password = useRef({});
  const { signIn, error, openRegister } = useActions();
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const response = await apiRegister(data);
    if (response) {
      signIn(response);
      navigate("/", { replace: true });
      openRegister(false);
    } else {
      error("Such user is already exists");
    }
    reset();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={classes.form__title}>Sign Up</h1>
      <InputField name="login" type="text" errors={errors} register={register("login", loginValidation)} />
      <InputField name="password" type="password" errors={errors} register={register("password", passwordValidation)} />
      <InputField
        name="repeat password"
        type="password"
        errors={errors}
        register={register("repeat password", repeatPassword(password.current.toString()))}
      />
      <input className={classes.form__submit} value="Submit" type="submit" disabled={!isValid} />
    </form>
  );
};

export default SignUp;
