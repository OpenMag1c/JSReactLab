import React, { FC, useEffect, useRef } from "react";
import classes from "./pullMenu.module.scss";
import { MenuFilterProps } from "@/types/types";

const PullMenu: FC<MenuFilterProps> = (props) => {
  const { init, title, styles = classes.pullDown__select, label, items, change } = props;
  const selectRef = useRef() as React.MutableRefObject<HTMLSelectElement>;

  const changeOption = () => {
    const index = selectRef.current.options.selectedIndex;
    change(label, index);
  };

  useEffect(() => {
    const item = selectRef.current.item(init);
    if (item) {
      item.selected = true;
    }
  }, [init]);

  return (
    <form className={classes.pullDown}>
      {title || null}
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

export default PullMenu;
