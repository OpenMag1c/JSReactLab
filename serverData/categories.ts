// eslint-disable-next-line import/no-extraneous-dependencies
import mockServerHelper from "webpack-mock-server/lib/mockServerHelper";
import ICategory from "@/types/ICategory";
import { categoryImages } from "@/constants/images";

interface ICategories {
  [key: string]: ICategory;
}

const categories: ICategories = {
  playstation: {
    img: categoryImages.playstationLogo,
    id: mockServerHelper.getUniqueIdInt(),
    name: "playstation",
    title: "Playstation 5",
  },
  xbox: {
    id: mockServerHelper.getUniqueIdInt(),
    name: "xbox",
    title: "XBOX",
    img: categoryImages.xboxLogo,
  },
  pc: {
    id: mockServerHelper.getUniqueIdInt(),
    name: "pc",
    title: "PC",
    img: categoryImages.pcLogo,
  },
};

export default categories;
