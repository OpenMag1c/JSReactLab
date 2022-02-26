import React, { FC, useRef } from "react";
import classes from "./uploadImage.module.scss";
import buttonStyles from "@/pages/userprofile/userProfile.module.scss";
import useActions from "@/hooks/useActions";
import { ProfileParams } from "@/types/types";

interface UploadImageProps {
  changeAvatar: (data: { [key: string]: string }) => void;
  avatar: string;
  label: ProfileParams;
}

const UploadImage: FC<UploadImageProps> = ({ avatar, changeAvatar, label }) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { error } = useActions();

  const loadFile = (event: React.FormEvent<HTMLInputElement>) => {
    const { files } = event.target as HTMLInputElement;
    if (files && files.length === 0 && files[0]) {
      error("Error!");
      return;
    }

    const file: File = (files as FileList)[0];
    if (file.size > 80_000) {
      error("Image is too large!");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      changeAvatar({ [label]: reader.result as string });
    };
  };

  const onClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={classes.avatar}>
      <img className={classes.avatar__image} alt="avatar" src={avatar} />
      <input ref={inputRef} className={classes.avatar__input} type="file" accept="image/*" onInput={loadFile} />
      <button type="button" className={buttonStyles.button} onClick={onClick}>
        Change image
      </button>
    </div>
  );
};

export default UploadImage;
