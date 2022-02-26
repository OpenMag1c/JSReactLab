export type authType = {
  isAuth: boolean;
  name?: string;
};

export type inputTextStyles = {
  input: string;
  icon: string;
};

export enum ProfileParams {
  login = "login",
  description = "description",
  avatar = "avatar",
}
