import { FC, useState } from "react";
import classes from "./confirmation.module.scss";
import MyButton from "@/components/elements/button/myButton";
import Modal from "@/components/modal/modal";

interface ConfirmationProps {
  makeAction: () => void;
  setConfirm: (isActive: boolean) => void;
  text: string;
}

const Confirmation: FC<ConfirmationProps> = ({ makeAction, setConfirm, text }) => {
  const [isOpen, setOpen] = useState<boolean>(true);

  const clickNo = () => {
    setOpen(false);
    setConfirm(false);
  };
  const clickYes = () => {
    makeAction();
    setConfirm(false);
    setOpen(false);
  };
  return (
    <Modal active={isOpen} setActive={clickNo}>
      <div className={classes.modal}>
        <h1>{text}</h1>
        <div className={classes.buttons}>
          <div className={classes.button}>
            <MyButton text="Yes" onClick={clickYes} />
          </div>
          <div className={classes.button}>
            <MyButton text="No" onClick={clickNo} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Confirmation;
