import { FC, useState } from "react";
import styles from "../form.module.scss";
import classes from "./editCard.module.scss";
import MyButton from "@/components/elements/button/myButton";
import IProduct from "@/types/IProduct";
import Fields from "@/components/forms/card/fields/fields";
import { changeOptions } from "@/types/types";
import useActions from "@/hooks/useActions";
import { emptyCard } from "@/constants/defaults";

const CreateCard: FC = () => {
  const [card, setCard] = useState<IProduct>(emptyCard);
  const { addCard, openCreateCard } = useActions();

  const changeCard: changeOptions = (label, data) => {
    const key = label.toLowerCase();
    setCard({ ...card, [key]: data });
  };

  const submitBtn = () => {
    addCard(card);
    openCreateCard(false);
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.form__title}>Create Card</h1>
      <div className={classes.form__inner}>
        <div className={classes.image}>
          <h2>Card image</h2>
          <img className={classes.image__logo} src={card.img} alt={card.name} />
        </div>
        <div className={classes.information}>
          <h2>Information</h2>
          <Fields change={changeCard} card={card} />
        </div>
        <div>
          <MyButton text="Submit" onClick={submitBtn} />
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
