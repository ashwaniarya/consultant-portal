export const formatDateTime = (timestamp: string | number) => {
  const date = new Date(timestamp);
  return {
    date: date.toLocaleDateString("en-US", {
      day: "2-digit", 
      month: "long",
      year: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit", 
      hour12: true,
    }),
  };
};

export const throttle = <T extends (...args: never[]) => never>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;

  return function (this: never, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};