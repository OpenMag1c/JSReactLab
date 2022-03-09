import { categoryImages } from "@/constants/images";
import ICategory, { Category } from "@/types/ICategory";

const categories: ICategory[] = [
  {
    type: Category.PlayStation,
    title: "PlayStation",
    img: categoryImages.playstationLogo,
  },
  {
    type: Category.XBOX,
    title: "XBOX",
    img: categoryImages.xboxLogo,
  },
  {
    type: Category.PC,
    title: "PC",
    img: categoryImages.pcLogo,
  },
];

export default categories;
