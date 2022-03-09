export enum Category {
  PC,
  PlayStation,
  XBOX,
}

export default interface ICategory {
  type: Category;
  title: string;
  img: string;
}
