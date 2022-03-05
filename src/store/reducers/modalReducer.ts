import { IModalState, ModalAction, ModalActions } from "@/types/reduxModal";

const defaultState: IModalState = {
  isLoginOpen: false,
  isRegisterOpen: false,
  isPasswordOpen: false,
  isError: false,
  errorMessage: "",
};

const modalReducer = (state = defaultState, action: ModalAction): IModalState => {
  switch (action.type) {
    case ModalActions.SET_MODAL_LOGIN:
      return { ...state, isLoginOpen: action.payload };
    case ModalActions.SET_MODAL_REGISTER:
      return { ...state, isRegisterOpen: action.payload };
    case ModalActions.SET_MODAL_ERROR:
      return { ...state, isError: action.payload };
    case ModalActions.SET_MODAL_MESSAGE:
      return { ...state, isError: true, errorMessage: action.payload };
    case ModalActions.SET_MODAL_PASSWORD:
      return { ...state, isPasswordOpen: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
