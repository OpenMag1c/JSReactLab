import { FC, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import classes from "../form.module.scss";
import InputField from "@/components/elements/input/inputField/inputField";
import { passwordValidation, repeatPassword } from "@/components/forms/validation";
import IUser from "@/types/IUser";
import { changePassword } from "@/api/api";
import useActions from "@/hooks/useActions";
import useTypedSelector from "@/hooks/useProtectedSelector";

interface IFormValues extends IUser {
  "repeat password": string;
}

const ChangePassword: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm<IFormValues>({
    mode: "onChange",
  });
  const { error, openPassword } = useActions();
  const { user } = useTypedSelector((state) => state.auth);
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const response = await changePassword(data.password, { id: user?.id ?? 0 });
    if (response) {
      openPassword(false);
    } else {
      error("Error!");
    }
    reset();
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={classes.form__title}>Change password</h1>
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

export default ChangePassword;
