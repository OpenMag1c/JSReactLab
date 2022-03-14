import React, { FC } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.scss";

interface ModalProps {
  active: boolean;
  setActive: (isActive: boolean) => void;
}

const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
  const clickModal = () => setActive(false);
  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation();

  return ReactDOM.createPortal(
    <div role="none" className={active ? `${classes.active} ${classes.modal}` : classes.modal} onClick={clickModal}>
      <div
        role="none"
        className={active ? `${classes.active} ${classes.modal__inner}` : classes.modal__inner}
        onClick={stopPropagation}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal") as HTMLDivElement
  );
};

export default Modal;
