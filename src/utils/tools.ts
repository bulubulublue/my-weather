import * as dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
/**
 *
 * format to local time
 *
 * @param {number|string} time timestapm
 * @param {string} format data format
 * @return {string} formatted date
 */
export function formatLocalTime(time: number | string, format = 'YYYY-MM-DD HH:mm:ss') {
  return `${dayjs.utc(Number(time)).local().format(format)}`;
}
