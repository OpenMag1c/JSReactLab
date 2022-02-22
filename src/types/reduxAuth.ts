import IUser from "@/types/IUser";

export interface IAuthState {
  isAuth: boolean;
  user: IUser | null;
}

export enum AuthActions {
  SIGN_IN = "SIGN_IN",
  SET_AUTH = "SET_AUTH",
  LOGOUT = "LOGOUT",
}

interface ISignInAction {
  type: AuthActions.SIGN_IN;
  payload: IUser;
}

interface ISetAuthAction {
  type: AuthActions.SET_AUTH;
  payload: boolean;
}

interface ILogoutAction {
  type: AuthActions.LOGOUT;
}

export type AuthAction = ISignInAction | ISetAuthAction | ILogoutAction;
