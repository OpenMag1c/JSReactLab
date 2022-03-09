// import React, { FC, useState } from "react";
// import { v4 as uuid } from "uuid";
// import classes from "./checkMenu.module.scss";
// import { getIndex } from "@/api/utils";
// import { Filters } from "@/constants/filters";
//
// export interface CheckMenuProps {
//   title: Filters;
//   items: { [key: string]: string };
//   change: (label: Filters, data: number) => void;
//   init: number[];
//   styles?: string;
// }
//
// const CheckMenu: FC<CheckMenuProps> = ({ items, title, change, init }) => {
//   const [selected, setSelected] = useState<number[]>([0, 1]);
//
//   const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const item = getIndex(items, event.target.id);
//     const index = selected.indexOf(item);
//     if (selected.includes(item)) {
//       selected.splice(index, 1);
//     } else {
//       selected.push(item);
//     }
//
//     setSelected([...selected]);
//   };
//
//   return (
//     <div className={classes.checks}>
//       <span className={classes.checks__title}>{title}</span>
//       <ul className={classes.checks__inner}>
//         {Object.values(items).map((item) => {
//           const id = uuid();
//           return (
//             <li key={id}>
//               <input
//                 type="checkbox"
//                 id={item}
//                 checked={selected.includes(getIndex(items, item))}
//                 className={classes.checks__button}
//                 onChange={changeInput}
//               />
//               <label htmlFor={item} className={classes.checks__label}>
//                 {item}
//               </label>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
//
// export default CheckMenu;
