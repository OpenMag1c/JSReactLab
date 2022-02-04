const transformParams = (props: { [key: string]: string | number }): string => {
  const keys = Object.keys(props);
  let result = "";

  if (keys.length) {
    const transformedParams = keys.map((key: string) => `${key}=${props[key]}`).join("&");
    result = `?${transformedParams}`;
  }

  return result;
};

export const debounce = <T>(callback: (...args: T[]) => void, delay = 300): ((...args: T[]) => void) => {
  let timerId: ReturnType<typeof setTimeout>;

  return (...args: T[]) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
      clearTimeout(timerId);
    }, delay);
  };
};

export default transformParams;
