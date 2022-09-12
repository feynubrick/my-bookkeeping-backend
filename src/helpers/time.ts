import { formatISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const getIsoString = function (date: Date): string {
  const timezone = 'Asia/Seoul';
  const zonedTime = utcToZonedTime(date, timezone);
  return formatISO(zonedTime);
};

export default {
  getIsoString,
};
