import { FC } from "react";
import ICategory from "../../../serverData/categories";
import classes from "./categoryItem.module.scss";

interface CategoryProps {
  category: ICategory;
}

const CategoryItem: FC<CategoryProps> = ({ category }) => {
  return (
    <div className={classes.category}>
      <img src={category.img} alt={category.name} />
      <p>{category.title}</p>
    </div>
  );
};

export default CategoryItem;
