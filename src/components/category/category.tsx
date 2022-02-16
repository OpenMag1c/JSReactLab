import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./category.module.scss";
import ICategory from "@/types/ICategory";

interface CategoryProps {
  category: ICategory;
}

const Category: FC<CategoryProps> = ({ category }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/products/${category.name}`);
  };

  return (
    <button type="button" className={classes.category} onClick={clickHandler} onKeyDown={clickHandler}>
      <img src={category.img} alt={category.name} />
      <p>{category.title}</p>
    </button>
  );
};

export default Category;
