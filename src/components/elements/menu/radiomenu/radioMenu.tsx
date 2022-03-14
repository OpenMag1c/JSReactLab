import React, { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./radioMenu.module.scss";
import { getIndex } from "@/api/utils";
import { MenuFilterProps } from "@/types/types";

const RadioMenu: FC<MenuFilterProps> = ({ items, label, change, init }) => {
  const [selected, setSelected] = useState<number>(init);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target.id;
    const index = getIndex(items, element);
    setSelected(index);
    change(label, index);
  };

  return (
    <div className={classes.radios}>
      <span className={classes.radios__title}>{label}</span>
      <ul className={classes.radios__inner}>
        {Object.values(items).map((item) => {
          const id = uuid();
          return (
            <li key={id}>
              <input
                type="radio"
                id={item}
                checked={selected === getIndex(items, item)}
                className={classes.radios__button}
                onChange={changeInput}
              />
              <label htmlFor={item} className={classes.radios__label}>
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RadioMenu;
