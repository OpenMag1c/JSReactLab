export interface IModalState {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
}

export enum ModalActions {
  SET_MODAL_LOGIN = "SET_MODAL_LOGIN",
  SET_MODAL_REGISTER = "SET_MODAL_REGISTER",
}

export interface IModalAction {
  type: ModalActions.SET_MODAL_LOGIN | ModalActions.SET_MODAL_REGISTER;
  payload: boolean;
}
