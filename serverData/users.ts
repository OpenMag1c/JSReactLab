// eslint-disable-next-line import/no-extraneous-dependencies
import mockServerHelper from "webpack-mock-server/lib/mockServerHelper";
import IUser, { Role } from "@/types/IUser";

const users: IUser[] = [
  { id: mockServerHelper.getUniqueIdInt(), login: "Admin", password: "Admin1", balance: 999, role: Role.Admin },
  { id: mockServerHelper.getUniqueIdInt(), login: "Maxim", password: "Qwerty1", balance: 49.74, role: Role.User },
];

export default users;
