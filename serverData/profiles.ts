import IProfile from "@/types/IProfile";
import users from "./users";
import IUser from "@/types/IUser";
import { profileImages } from "@/constants/images";

const userProfiles: IProfile[] = [
  { user: users[1], avatar: profileImages.user, description: "13 y.o. boy, I go to school every day<3" },
];

export const getEmptyProfile = (user: IUser) => {
  const newProfile: IProfile = {
    avatar: profileImages.empty,
    user,
    description: "Write smth about yourself",
  };
  userProfiles.push(newProfile);
  return newProfile;
};

export default userProfiles;
