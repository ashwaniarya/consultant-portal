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