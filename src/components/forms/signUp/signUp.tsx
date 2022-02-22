import { FC, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import classes from "../form.module.scss";
import InputField from "@/components/elements/inputField/inputField";
import { loginValidation, passwordValidation } from "@/components/forms/validation";
import IUser from "@/types/IUser";
import { apiRegister } from "@/api/api";
import useActions from "@/hooks/useActions";

interface IFormValues extends IUser {
  "repeat password": string;
}

interface SignUpProps {
  setActive: (isActive: boolean) => void;
}

const SignUp: FC<SignUpProps> = ({ setActive }) => {
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
  const { signIn } = useActions();
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const response = await apiRegister(data);
    if (response) {
      signIn(data);
      navigate("/", { replace: true });
      setActive(false);
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
        register={register("repeat password", {
          validate: (value) => value === password.current || "The passwords do not match",
        })}
      />
      <input className={classes.form__submit} value="Submit" type="submit" disabled={!isValid} />
    </form>
  );
};

export default SignUp;
