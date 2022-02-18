import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "../form.module.scss";
import InputField from "@/components/elements/inputField/inputField";
import { loginValidation, passwordValidation } from "@/components/forms/validation";
import { authorize } from "@/api/api";
import IUser from "@/types/IUser";
import { authType } from "@/types/types";

interface SignInProps {
  setAuth: (props: authType) => void;
  setActive: (isActive: boolean) => void;
}

const SignIn: FC<SignInProps> = ({ setAuth, setActive }) => {
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

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    const response = await authorize(data);
    if (response) {
      setAuth({ isAuth: response, name: data.login });
      const state = location.state as { from: Location };
      const page = state?.from?.pathname || "/";
      navigate(page, { replace: true });
      setActive(false);
    } else {
      setAuth({ isAuth: response });
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
