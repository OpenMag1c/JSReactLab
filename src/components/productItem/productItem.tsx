import { FC } from "react";
import IProduct from "../../../serverData/products";
import "./productItem.scss";
import { categories } from "../../../serverData/categories";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const gameCategory = Object.keys(categories).find((key) => categories[key].id === product.categoryId);
  const category = gameCategory ? categories[gameCategory] : categories.pc;
  return (
    <div className="productItem">
      <div className="productItem-inner">
        <div className="front">
          <div className="productItem-category">
            {product.rating}/10
            <img className="productItem-category-image" src={category.img} alt={category.title} />
          </div>
          <img className="product__image" src={product.img} alt={product.name} />
          <div className="title">
            <p>{product.name}</p>
            <p>{`${String(product.price)} $`}</p>
          </div>
        </div>
        <div className="back">
          <p>{product.description}</p>
          <button className="back-button" type="submit" onClick={() => alert("Product added")}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
