import { FC } from "react";
import classes from "@/components/forms/card/editCard.module.scss";
import TextField from "@/components/forms/card/textField/textField";
import PullMenu from "@/components/elements/menus/pullmenu/pullMenu";
import TextBigField from "@/components/forms/card/textBigField/textBigField";
import CheckMenu from "@/components/elements/menus/checkmenu/checkMenu";
import IProduct from "@/types/IProduct";
import { changeOptions } from "@/types/types";
import { Ages, Genres } from "@/constants/filters";
import ProductKeys from "@/constants/options";
import { Categories } from "@/constants/categories";
import ImageField from "@/components/forms/card/imageField/imageField";

interface FieldsProps {
  change: changeOptions;
  card: IProduct;
}

const Fields: FC<FieldsProps> = ({ change, card }) => (
  <div className={classes.information__fields}>
    <TextField title={ProductKeys.Name} init={card.name} changeCard={change} type="text" />
    <PullMenu
      label={ProductKeys.Genre}
      items={Genres}
      change={change}
      init={card.genre}
      styles={classes.pullMenu}
      title="Genre"
    />
    <TextField title={ProductKeys.Price} init={card.price} changeCard={change} type="number" />
    <ImageField title={ProductKeys.Img} init={card.img} changeCard={change} type="text" />
    <TextField title={ProductKeys.Rating} init={card.rating} changeCard={change} type="number" />
    <TextBigField title={ProductKeys.Description} init={card.description} changeCard={change} type="text" />
    <PullMenu
      label={ProductKeys.Age}
      items={Ages}
      change={change}
      styles={classes.pullMenu}
      init={card.age}
      title="Age"
    />
    <CheckMenu label={ProductKeys.Category} items={Categories} change={change} init={card.category} />
  </div>
);

export default Fields;
