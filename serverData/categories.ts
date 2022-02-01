// eslint-disable-next-line import/no-extraneous-dependencies
import mockServerHelper from "webpack-mock-server/lib/mockServerHelper";

const playstationLogo = "https://res.cloudinary.com/dvweto8rq/image/upload/WebAPI/Playstation_pk1udu.png";
const pcLogo = "https://res.cloudinary.com/dvweto8rq/image/upload/WebAPI/PC_xzabct.png";
const xboxLogo = "https://res.cloudinary.com/dvweto8rq/image/upload/WebAPI/XBOX_xasedy.png";

export default interface ICategory {
  name: string;
  id: string | number;
  img: string;
  title: string;
}

interface ICategories {
  [key: string]: ICategory;
}

export const categories: ICategories = {
  playstation: {
    img: playstationLogo,
    id: mockServerHelper.getUniqueIdInt(),
    name: "playstation",
    title: "Playstation 5",
  },
  xbox: {
    id: mockServerHelper.getUniqueIdInt(),
    name: "xbox",
    title: "XBOX",
    img: xboxLogo,
  },
  pc: {
    id: mockServerHelper.getUniqueIdInt(),
    name: "pc",
    title: "PC",
    img: pcLogo,
  },
};
