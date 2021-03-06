import { FC } from "react";

export const IconExit: FC = () => <i className="fa-solid fa-arrow-right-from-bracket fa-xl" />;

export const IconProfile: FC = () => <i className="fa-solid fa-user fa-lg icProfile" />;

export const IconError: FC = () => <i className="fa-solid fa-circle-exclamation icError" />;

export const IconDropDown: FC = () => <i className="fa-solid fa-caret-down icArrow" />;

export const IconPen: FC = () => <i className="fa-solid fa-pen fa-lg icPen" />;

export const IconBigError: FC = () => <i className="fa-solid fa-triangle-exclamation fa-6x icBigError" />;

export const IconBasket: FC = () => <i className="fa-solid fa-basket-shopping fa-lg icProfile" />;

export const IconTrash: FC = () => <i className="fa-solid fa-trash-can fa-2x" />;

export const IconStar: FC = ({ children }) => <i className="fa-regular fa-star">{children}</i>;
