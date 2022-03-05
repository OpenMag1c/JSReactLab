import IFilter from "@/types/IFilter";
import { IParams } from "@/types/types";
import { CriteriaList } from "@/constants/filters";

const getUrlParams = (props: { [key: string]: string | number }): string => {
  const keys = Object.keys(props);
  const result = new URLSearchParams();
  keys.forEach((key: string) => result.append(key, props[key] as string));
  return `?${result.toString()}`;
};

type debounceFunc = <T>(func: (...args: T[]) => void, delay: number) => (...args: T[]) => void;

export const debounce: debounceFunc = (func, delay) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
      clearTimeout(timerId);
    }, delay);
  };
};

export const getIndex = (items: { [key: string]: string }, element: string) => Object.values(items).indexOf(element);
const getFieldName = (items: { [key: string]: string }, index: number) => Object.values(items)[index].toLowerCase();

export const getParams = (filter: IFilter): IParams => ({
  genre: filter.Genre,
  age: filter.Age,
  type: filter.Type,
  sortBy: getFieldName(CriteriaList, filter.Criteria),
});

export default getUrlParams;
