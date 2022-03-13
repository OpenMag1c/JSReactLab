import React, { FC, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./checkMenu.module.scss";
import { getIndex } from "@/api/utils";
import { CheckMenuProps } from "@/types/types";

const CheckMenu: FC<CheckMenuProps> = ({ items, label, change, init }) => {
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    setSelected(init);
  }, [init]);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const item = getIndex(items, event.target.id);
    const newSelected = selected;
    const index = newSelected.indexOf(item);
    if (newSelected.includes(item)) {
      newSelected.splice(index, 1);
    } else {
      newSelected.push(item);
    }

    setSelected(newSelected);
    change(label, init);
  };

  return (
    <div className={classes.checks}>
      <span className={classes.checks__title}>{label}</span>
      <ul className={classes.checks__inner}>
        {Object.values(items).map((item) => {
          const id = uuid();
          return (
            <li key={id}>
              <input
                type="checkbox"
                id={item}
                checked={selected.includes(getIndex(items, item))}
                className={classes.checks__button}
                onChange={changeInput}
              />
              <label htmlFor={item} className={classes.checks__label}>
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckMenu;
