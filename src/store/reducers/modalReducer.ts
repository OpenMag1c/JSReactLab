import { IModalAction, IModalState, ModalActions } from "@/types/reduxModal";

const defaultState: IModalState = {
  isLoginOpen: false,
  isRegisterOpen: false,
};

// eslint-disable-next-line default-param-last
const modalReducer = (state = defaultState, action: IModalAction): IModalState => {
  switch (action.type) {
    case ModalActions.SET_MODAL_LOGIN:
      return { ...state, isLoginOpen: action.payload };
    case ModalActions.SET_MODAL_REGISTER:
      return { ...state, isRegisterOpen: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
