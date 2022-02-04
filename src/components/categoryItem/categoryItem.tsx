import { FC } from "react";
import ICategory from "../../../serverData/categories";
import classes from "./categoryItem.module.scss";

interface CategoryProps {
  category: ICategory;
  onClick: (category: ICategory) => void;
}

const CategoryItem: FC<CategoryProps> = ({ category, onClick }) => (
  <div role="button" className={classes.category} onClick={() => onClick(category)} onKeyDown={() => onClick(category)}>
    <img src={category.img} alt={category.name} />
    <p>{category.title}</p>
  </div>
);

export default CategoryItem;
