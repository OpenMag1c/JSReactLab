import { Dispatch } from "redux";
import { ModalAction, ModalActions } from "@/types/reduxModal";

export const openLogin = (isActive: boolean) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_LOGIN, payload: isActive });
};

export const openRegister = (isActive: boolean) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_REGISTER, payload: isActive });
};

export const openError = (isActive: boolean) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_ERROR, payload: isActive });
};

export const error = (message: string) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_MESSAGE, payload: message });
};

export const openPassword = (isActive: boolean) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_PASSWORD, payload: isActive });
};
