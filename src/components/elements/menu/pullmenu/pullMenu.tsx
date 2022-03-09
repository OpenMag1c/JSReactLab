import React, { FC, useEffect, useRef } from "react";
import classes from "./pullMenu.module.scss";
import { Filters } from "@/constants/filters";

interface MenuFilterProps {
  title: Filters;
  items: { [key: string]: string };
  change: (label: Filters, data: number) => void;
  init: number;
  styles?: string;
}

const PullMenu: FC<MenuFilterProps> = ({ title, items, change, init, styles }) => {
  const selectRef = useRef() as React.MutableRefObject<HTMLSelectElement>;

  const changeOption = () => {
    const index = selectRef.current.options.selectedIndex;
    change(title, index);
  };

  useEffect(() => {
    const item = selectRef.current.item(init);
    if (item) {
      item.selected = true;
    }
  }, []);

  return (
    <form className={classes.pullDown}>
      {title}
      <select ref={selectRef} className={styles} onChange={changeOption}>
        {Object.values(items).map((item) => (
          <option className={classes.pullDown__option} key={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
};

PullMenu.defaultProps = {
  styles: classes.pullDown__select,
};

export default PullMenu;
