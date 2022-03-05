import { AuthAction, AuthActions, IAuthState } from "@/types/reduxAuth";

const defaultState: IAuthState = {
  isAuth: false,
  user: null,
};

const authReducer = (state = defaultState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActions.SIGN_IN:
      localStorage.setItem("id", JSON.stringify(action.payload.id));
      return { ...state, isAuth: true, user: action.payload };
    case AuthActions.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActions.LOGOUT:
      localStorage.removeItem("id");
      return { ...state, isAuth: false, user: null };
    default:
      return state;
  }
};

export default authReducer;
