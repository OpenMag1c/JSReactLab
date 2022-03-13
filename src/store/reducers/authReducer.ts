import { AuthAction, AuthActions, IAuthState } from "@/types/redux/auth";
import IUser, { Role } from "@/types/IUser";

const defaultState: IAuthState = {
  isAuth: false,
  isAdmin: false,
  user: null,
};

const authReducer = (state = defaultState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActions.SIGN_IN:
      localStorage.setItem("id", JSON.stringify(action.payload.id));
      const user = action.payload;
      const isAdmin = user.role === Role.Admin;
      return { ...state, isAuth: true, user, isAdmin };
    case AuthActions.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActions.LOGOUT:
      localStorage.removeItem("id");
      return { ...state, isAuth: false, isAdmin: false, user: null };
    case AuthActions.SET_BALANCE:
      return { ...state, user: { ...state.user, balance: action.payload } as IUser };
    default:
      return state;
  }
};

export default authReducer;
