export enum Role {
  Admin,
  User,
}

export default interface IUser {
  id: number;
  login: string;
  password: string;
  balance: number;
  role: Role;
}
