import { Dispatch } from "redux";
import { IModalAction, ModalActions } from "@/types/reduxModal";

export const openLogin = (isActive: boolean) => (dispatch: Dispatch<IModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_LOGIN, payload: isActive });
};

export const openRegister = (isActive: boolean) => (dispatch: Dispatch<IModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_REGISTER, payload: isActive });
};
