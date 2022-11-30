import { formatInTimeZone } from "date-fns-tz";

export const dateFormat = (date) => {
  const convertedDate = new Date(date);
  return formatInTimeZone(convertedDate, "America/New_York", "dd MMM yyyy");
};
