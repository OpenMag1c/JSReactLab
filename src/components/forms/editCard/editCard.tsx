// import { FC, useState } from "react";
// import styles from "../form.module.scss";
// import classes from "./editCard.module.scss";
// import products from "../../../../serverData/products";
// import TextField from "@/components/forms/editCard/textField/textField";
// import TextBigField from "@/components/forms/editCard/textBigField/textBigField";
// import MyButton from "@/components/elements/button/myButton";
// import IProduct from "@/types/IProduct";
//
// const EditCard: FC = () => {
//   const [card, setCard] = useState<IProduct>(products[0]);
//   return (
//     <form className={styles.form}>
//       <h1 className={styles.form__title}>Edit Card</h1>
//       <div className={classes.form__inner}>
//         <div className={classes.image}>
//           <h2>Card image</h2>
//           <img className={classes.image__logo} src={card.img} alt={card.name} />
//         </div>
//         <div className={classes.information}>
//           <h2>Information</h2>
//           <div className={classes.information__fields}>
//             <TextField title="Name" />
//             {/* <PullMenu title={Filters.Genre} items={EditGenres} change={} init={card.genre} styles={classes.pullMenu} /> */}
//             <TextField title="Price" />
//             <TextField title="Image" />
//             <TextBigField title="Description" />
//             {/* <PullMenu title={Filters.Age} items={EditAges} change={} init={card.age} styles={classes.pullMenu} /> */}
//             {/* <CheckMenu title={Filters.Platform} items={EditCategories} change={} init={card.category} /> */}
//           </div>
//         </div>
//         <div>
//           <MyButton text="Delete" />
//           <MyButton text="Submit" />
//         </div>
//       </div>
//     </form>
//   );
// };
//
// export default EditCard;
