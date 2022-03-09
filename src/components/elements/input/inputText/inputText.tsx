import React, { FC, Ref, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { IconPen } from "@/components/elements/icons/icons";
import { inputTextStyles, InputParams } from "@/types/types";
import MyButton from "@/components/elements/button/myButton";

interface InputTextProps {
  text: string;
  changeText: (data: { [key: string]: string }) => void;
  styles: inputTextStyles;
  label: InputParams;
}

export type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
type TextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

const InputText: FC<InputTextProps> = <T extends InputElement>({ text, styles, changeText, label }: InputTextProps) => {
  const [isEnable, setEnable] = useState<boolean>(true);
  const inputRef = useRef<T>(null);

  const onIconCLick = () => {
    if (inputRef.current) {
      flushSync(() => {
        setEnable(false);
      });
      inputRef.current.focus();
    }
  };

  const onBlurInput = () => {
    setEnable(true);
  };

  const onChangeInput = (event: React.ChangeEvent<T>) => {
    changeText({ [label]: event.target.value });
  };

  return (
    <>
      {label === InputParams.login ? (
        <input
          ref={inputRef as Ref<HTMLInputElement>}
          value={text}
          className={styles.input}
          disabled={isEnable}
          onChange={onChangeInput as InputChange}
          onBlur={onBlurInput}
        />
      ) : (
        <textarea
          ref={inputRef as Ref<HTMLTextAreaElement>}
          value={text}
          className={styles.input}
          disabled={isEnable}
          onChange={onChangeInput as TextAreaChange}
          onBlur={onBlurInput}
        />
      )}
      <MyButton style={styles.icon} onClick={onIconCLick}>
        <IconPen />
      </MyButton>
    </>
  );
};

export default InputText;
