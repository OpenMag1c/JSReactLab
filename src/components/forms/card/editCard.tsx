import { FC, useEffect, useState } from "react";
import styles from "../form.module.scss";
import classes from "./editCard.module.scss";
import MyButton from "@/components/elements/button/myButton";
import IProduct from "@/types/IProduct";
import { changeOptions } from "@/types/types";
import useActions from "@/hooks/useActions";
import { emptyCard } from "@/constants/defaults";
import Fields from "@/components/forms/card/fields/fields";
import Confirmation from "@/components/modal/confirmation/confirmation";
import validateCard from "@/components/forms/card/validateCard";

interface EditCardProps {
  editCard: IProduct;
}

const EditCard: FC<EditCardProps> = ({ editCard }) => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const [card, setCard] = useState<IProduct>(emptyCard);
  const { updateCard, openEditCard, deleteCard } = useActions();

  const confirmText = `Are you sure you want to delete the product ${card.name}?`;

  useEffect(() => {
    setCard(editCard);
  }, [editCard]);

  const changeCard: changeOptions = (label, data) => {
    const key = label.toLowerCase();
    setCard({ ...card, [key]: data });
  };

  const deleteAction = () => {
    deleteCard(card.id);
    openEditCard(false);
  };

  const submitBtn = () => {
    if (!validateCard(card)) {
      alert("Wrong inputs data!");
      return;
    }
    updateCard(card);
    openEditCard(false);
  };

  const deleteBtn = () => {
    setConfirm(true);
  };
  return (
    <div className={styles.form}>
      {!confirm ? (
        <>
          <h1 className={styles.form__title}>Edit Card</h1>
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
              <MyButton text="Delete" onClick={deleteBtn} />
            </div>
          </div>
        </>
      ) : (
        <Confirmation text={confirmText} setConfirm={setConfirm} makeAction={deleteAction} />
      )}
    </div>
  );
};

export default EditCard;
