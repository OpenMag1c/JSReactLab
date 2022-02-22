import { AuthAction, AuthActions, IAuthState } from "@/types/reduxAuth";

const defaultState: IAuthState = {
  isAuth: false,
  user: null,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = defaultState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActions.SIGN_IN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, isAuth: true, user: action.payload };
    case AuthActions.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActions.LOGOUT:
      localStorage.removeItem("user");
      return { ...state, isAuth: false, user: null };
    default:
      return state;
  }
};

export default authReducer;