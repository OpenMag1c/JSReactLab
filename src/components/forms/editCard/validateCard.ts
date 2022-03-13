import IProduct from "@/types/IProduct";

const validateCard = (card: IProduct): boolean => {
  const validRating = card.rating >= 0 && card.rating <= 10;
  const validPrice = card.price >= 0 && card.price <= 999;
  return validPrice && validRating;
};

export default validateCard;
