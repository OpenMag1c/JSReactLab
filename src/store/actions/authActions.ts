import { Dispatch } from "redux";
import IUser from "@/types/IUser";
import { AuthAction, AuthActions } from "@/types/redux/auth";

export const signIn = (user: IUser) => (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: AuthActions.SIGN_IN, payload: user });
};

export const logout = () => (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: AuthActions.LOGOUT });
};

export const setAuth = (isAuth: boolean) => (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: AuthActions.SET_AUTH, payload: isAuth });
};

export const setBalance = (money: number) => (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: AuthActions.SET_BALANCE, payload: money });
};
