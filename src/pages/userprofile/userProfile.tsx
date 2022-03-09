import { FC, useEffect, useState } from "react";
import useTypedSelector from "@/hooks/useProtectedSelector";
import IProfile from "@/types/IProfile";
import { getProfile, saveProfile } from "@/api/api";
import classes from "./userProfile.module.scss";
import inputStyles from "./inputText.module.scss";
import useActions from "@/hooks/useActions";
import { InputParams } from "@/types/types";
import InputImage from "@/components/elements/input/inputImage/inputImage";
import InputText from "@/components/elements/input/inputText/inputText";
import { regularLogin } from "@/constants/regular";
import MyButton from "@/components/elements/button/myButton";

const UserProfile: FC = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const [profile, setProfile] = useState<IProfile>();
  const { openPassword, error, signIn } = useActions();

  const validateLogin = (login: string): boolean => {
    const isValid = regularLogin.test(login);
    return isValid && login.length > 0;
  };

  const clickSave = async () => {
    if (user && profile) {
      if (!validateLogin(profile.user.login)) {
        error("Not valid login!");
        return;
      }

      const response = await saveProfile(profile, { id: user?.id });
      signIn(response.user);
    }
  };

  const changeProfile = (param: { [key: string]: string }) => {
    setProfile({ ...profile, ...param } as IProfile);

    const { login } = param;
    if (login !== undefined) {
      setProfile({ ...profile, user: { ...user, login } } as IProfile);
    }
  };

  const changePassword = () => {
    openPassword(true);
  };

  useEffect(() => {
    (async () => {
      if (user) {
        const prof = await getProfile({ id: user.id });
        setProfile(prof);
      }
    })();
  }, []);

  return (
    <div className={classes.profilePage}>
      <div className={classes.profile}>
        <InputImage avatar={profile?.avatar || ""} label={InputParams.avatar} changeAvatar={changeProfile} />
        <div className={classes.info}>
          <div className={classes.info__username}>
            <InputText
              label={InputParams.login}
              text={profile?.user.login || ""}
              styles={{ input: inputStyles.name, icon: inputStyles.name__icon }}
              changeText={changeProfile}
            />
          </div>
          <InputText
            label={InputParams.description}
            text={profile?.description || ""}
            styles={{ input: inputStyles.description, icon: inputStyles.description__icon }}
            changeText={changeProfile}
          />
        </div>
        <div className={classes.buttons}>
          <MyButton onClick={clickSave} text="Save profile" />
          <MyButton onClick={changePassword} text="Change password" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
