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

export default getUrlParams;
