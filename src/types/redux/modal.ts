import IProduct from "@/types/IProduct";

export interface IModalState {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  isPasswordOpen: boolean;
  isEditCard: boolean;
  editCard: IProduct;
  isError: boolean;
  isNewCard: boolean;
  errorMessage: string;
  forceUpdate: number;
}

export enum ModalActions {
  SET_MODAL_LOGIN = "SET_MODAL_LOGIN",
  SET_MODAL_REGISTER = "SET_MODAL_REGISTER",
  SET_MODAL_PASSWORD = "SET_MODAL_PASSWORD",
  SET_MODAL_ERROR = "SET_MODAL_ERROR",
  SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE",
  SET_MODAL_EDIT_CARD = "SET_MODAL_EDIT_CARD",
  SET_MODAL_CREATE_CARD = "SET_MODAL_CREATE_CARD",
  SET_EDIT_CARD = "SET_EDIT_CARD",
  SET_UPDATE = "SET_UPDATE",
}

interface IFormAction {
  type:
    | ModalActions.SET_MODAL_LOGIN
    | ModalActions.SET_MODAL_REGISTER
    | ModalActions.SET_MODAL_ERROR
    | ModalActions.SET_MODAL_PASSWORD
    | ModalActions.SET_MODAL_EDIT_CARD
    | ModalActions.SET_MODAL_CREATE_CARD;
  payload: boolean;
}

interface IUpdateAction {
  type: ModalActions.SET_UPDATE;
}

interface IErrorAction {
  type: ModalActions.SET_ERROR_MESSAGE;
  payload: string;
}

interface IEditCardAction {
  type: ModalActions.SET_EDIT_CARD;
  payload: IProduct;
}

export type ModalAction = IFormAction | IErrorAction | IEditCardAction | IUpdateAction;
