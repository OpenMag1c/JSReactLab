import IUser from "@/types/IUser";

export default interface IProfile {
  user: IUser;
  description: string;
  avatar: string;
}
