import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "../form.module.scss";
import InputField from "@/components/elements/inputField/inputField";
import { loginValidation, passwordValidation } from "@/components/forms/validation";
import { authorize } from "@/api/api";
import IUser from "@/types/IUser";
import useActions from "@/hooks/useActions";

interface SignInProps {
  setActive: (isActive: boolean) => void;
}

const SignIn: FC<SignInProps> = ({ setActive }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IUser>({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useActions();

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    const response = await authorize(data);
    if (response) {
      signIn(data);
      const state = location.state as { from: Location };
      const page = state?.from?.pathname || "/";
      navigate(page, { replace: true });
      setActive(false);
    } else {
      alert("Wrong login or password!");
    }
    reset();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={classes.form__title}>Sign In</h1>
      <InputField name="login" type="text" errors={errors} register={register("login", loginValidation)} />
      <InputField name="password" type="password" errors={errors} register={register("password", passwordValidation)} />
      <input className={classes.form__submit} value="Submit" type="submit" disabled={!isValid} />
    </form>
  );
};

export default SignIn;
