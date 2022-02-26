import { FC, useEffect, useState } from "react";
import useTypedSelector from "@/hooks/useProtectedSelector";
import IProfile from "@/types/IProfile";
import { getProfile, saveProfile } from "@/api/api";
import classes from "./userProfile.module.scss";
import inputStyles from "./inputText.module.scss";
import useActions from "@/hooks/useActions";
import { ProfileParams } from "@/types/types";
import UploadImage from "@/components/elements/uploadImage/uploadImage";
import InputText from "@/components/elements/inputText/inputText";

const UserProfile: FC = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const [profile, setProfile] = useState<IProfile>();
  const { openPassword } = useActions();

  const clickSave = async () => {
    if (user && profile) {
      const response = await saveProfile(profile, { id: user?.id });
      alert(JSON.stringify(response));
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
        <UploadImage avatar={profile?.avatar || ""} label={ProfileParams.avatar} changeAvatar={changeProfile} />
        <div className={classes.info}>
          <div className={classes.info__username}>
            <InputText
              label={ProfileParams.login}
              text={profile?.user.login || ""}
              styles={{ input: inputStyles.name, icon: inputStyles.name__icon }}
              changeText={changeProfile}
            />
          </div>
          <InputText
            label={ProfileParams.description}
            text={profile?.description || ""}
            styles={{ input: inputStyles.description, icon: inputStyles.description__icon }}
            changeText={changeProfile}
          />
        </div>
        <div className={classes.buttons}>
          <button type="button" className={classes.button} onClick={clickSave}>
            Save profile
          </button>
          <button type="button" className={classes.button} onClick={changePassword}>
            Change password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
