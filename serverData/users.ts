// eslint-disable-next-line import/no-extraneous-dependencies
import mockServerHelper from "webpack-mock-server/lib/mockServerHelper";
import IUser from "@/types/IUser";

const users: IUser[] = [
  { id: mockServerHelper.getUniqueIdInt(), login: "Admin", password: "Admin1" },
  { id: mockServerHelper.getUniqueIdInt(), login: "Maxim", password: "Qwerty1" },
];

export default users;
