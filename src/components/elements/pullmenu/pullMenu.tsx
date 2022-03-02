import React, { FC, useEffect, useRef } from "react";
import classes from "./pullMenu.module.scss";
import { MenuFilterProps } from "@/types/types";

const PullMenu: FC<MenuFilterProps> = ({ title, items, change, init }) => {
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
      <select ref={selectRef} className={classes.pullDown__select} onChange={changeOption}>
        {Object.values(items).map((item) => (
          <option className={classes.pullDown__option} key={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
};

export default PullMenu;
