import { Dispatch } from "redux";
import { ModalAction, ModalActions } from "@/types/redux/modal";
import IProduct from "@/types/IProduct";
import { addProduct, deleteProduct, updateProduct } from "@/api/api";

export const openLogin = (isActive: boolean) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_LOGIN, payload: isActive });
};

export const openRegister = (isActive: boolean) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_REGISTER, payload: isActive });
};

export const openError = (isActive: boolean) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_ERROR, payload: isActive });
};

export const editCard = (card: IProduct) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_EDIT_CARD, payload: card });
};

export const openEditCard = (isActive: boolean) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_EDIT_CARD, payload: isActive });
};

export const openCreateCard = (isActive: boolean) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_CREATE_CARD, payload: isActive });
};

export const error = (message: string) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_ERROR_MESSAGE, payload: message });
};

export const openPassword = (isActive: boolean) => (dispatch: Dispatch<ModalAction>) => {
  dispatch({ type: ModalActions.SET_MODAL_PASSWORD, payload: isActive });
};

export const updateCard = (product: IProduct) => async (dispatch: Dispatch<ModalAction>) => {
  await updateProduct(product);
  dispatch({ type: ModalActions.SET_UPDATE });
};

export const deleteCard = (id: number | string) => async (dispatch: Dispatch<ModalAction>) => {
  await deleteProduct(id);
  dispatch({ type: ModalActions.SET_UPDATE });
};

export const addCard = (product: IProduct) => async (dispatch: Dispatch<ModalAction>) => {
  await addProduct(product);
  dispatch({ type: ModalActions.SET_UPDATE });
};
