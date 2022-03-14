import React, { FC, useRef } from "react";
import classes from "./inputImage.module.scss";
import useActions from "@/hooks/useActions";
import { InputParams } from "@/types/types";
import MyButton from "@/components/elements/button/myButton";

interface InputImageProps {
  changeAvatar: (data: { [key: string]: string }) => void;
  avatar: string;
  label: InputParams;
}

const InputImage: FC<InputImageProps> = ({ avatar, changeAvatar, label }) => {
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
      <div className={classes.avatar__btn}>
        <MyButton onClick={onClick} text="Change image" />
      </div>
    </div>
  );
};

export default InputImage;
