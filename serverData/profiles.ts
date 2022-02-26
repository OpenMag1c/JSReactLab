import IProfile from "@/types/IProfile";
import users from "./users";
import IUser from "@/types/IUser";

const avatar = "https://res.cloudinary.com/dvweto8rq/image/upload/v1645534802/WebAPI/avaKlinok_nhvzi0.jpg";
const emptyAvatar = "https://res.cloudinary.com/dvweto8rq/image/upload/v1645535361/WebAPI/minifig_pmrbfj.png";

const userProfiles: IProfile[] = [{ user: users[1], avatar, description: "13 y.o. boy, I go to school every day<3" }];

export const getEmptyProfile = (user: IUser) => {
  const newProfile: IProfile = {
    avatar: emptyAvatar,
    user,
    description: "Write smth about yourself",
  };
  userProfiles.push(newProfile);
  return newProfile;
};

export default userProfiles;
