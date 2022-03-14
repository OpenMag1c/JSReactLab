import { IModalState, ModalAction, ModalActions } from "@/types/redux/modal";
import { emptyCard } from "@/constants/defaults";

const defaultState: IModalState = {
  isLoginOpen: false,
  isRegisterOpen: false,
  isPasswordOpen: false,
  isEditCard: false,
  editCard: emptyCard,
  isError: false,
  isNewCard: false,
  errorMessage: "",
  forceUpdate: 0,
};

const modalReducer = (state = defaultState, action: ModalAction): IModalState => {
  switch (action.type) {
    case ModalActions.SET_MODAL_LOGIN:
      return { ...state, isLoginOpen: action.payload };
    case ModalActions.SET_MODAL_REGISTER:
      return { ...state, isRegisterOpen: action.payload };
    case ModalActions.SET_MODAL_ERROR:
      return { ...state, isError: action.payload };
    case ModalActions.SET_ERROR_MESSAGE:
      return { ...state, isError: true, errorMessage: action.payload };
    case ModalActions.SET_MODAL_PASSWORD:
      return { ...state, isPasswordOpen: action.payload };
    case ModalActions.SET_MODAL_EDIT_CARD:
      return { ...state, isEditCard: action.payload };
    case ModalActions.SET_EDIT_CARD:
      return { ...state, isEditCard: true, editCard: action.payload };
    case ModalActions.SET_UPDATE:
      return { ...state, forceUpdate: state.forceUpdate + 1 };
    case ModalActions.SET_MODAL_CREATE_CARD:
      return { ...state, isNewCard: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
