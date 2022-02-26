export interface IModalState {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  isPasswordOpen: boolean;
  isError: boolean;
  errorMessage: string;
}

export enum ModalActions {
  SET_MODAL_LOGIN = "SET_MODAL_LOGIN",
  SET_MODAL_REGISTER = "SET_MODAL_REGISTER",
  SET_MODAL_PASSWORD = "SET_MODAL_PASSWORD",
  SET_MODAL_ERROR = "SET_MODAL_ERROR",
  SET_MODAL_MESSAGE = "SET_MODAL_MESSAGE",
}

interface IFormAction {
  type:
    | ModalActions.SET_MODAL_LOGIN
    | ModalActions.SET_MODAL_REGISTER
    | ModalActions.SET_MODAL_ERROR
    | ModalActions.SET_MODAL_PASSWORD;
  payload: boolean;
}

interface IErrorAction {
  type: ModalActions.SET_MODAL_MESSAGE;
  payload: string;
}

export type ModalAction = IFormAction | IErrorAction;
