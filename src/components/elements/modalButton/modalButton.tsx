import { FC } from "react";
import classes from "./modalButton.module.scss";

interface ModalButtonProps {
  title: string;
  setIsOpen: (isOpen: boolean) => void;
}

const ModalButton: FC<ModalButtonProps> = ({ children, title, setIsOpen }) => {
  const Login = () => {
    setIsOpen(true);
  };
  return (
    <div className={classes.modelButton}>
      <button type="button" className={classes.modelButton__button} onClick={Login}>
        {title}
      </button>
      {children}
    </div>
  );
};

export default ModalButton;
