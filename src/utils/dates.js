import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { TIME_OFFSET } from '../settings';
dayjs.extend(utc);

export const formatTime = time => localTime(time).format('HH:mm');

/**
 *
 *
 * @param {*} time
 */
export const localTime = time => UTC(time).utcOffset(TIME_OFFSET);
/**
 *
 *
 * @param {*} time
 */
export const UTC = time => dayjs(time).utc();
/**
 *
 *
 * @param {*} prayers
 * @param {*} fn
 * @param {String} separator
 * @returns {String
 */
export const getGeorgianMonths = (prayers, fn, separator = '/') => {
  const results = new Set();
  prayers.forEach(prayer => results.add(fn(prayer.day, { month: 'long' })));
  return Array.from(results).join(separator);
};

/**
 *
 *
 * @param {*} prayer
 */
export const isToday = day => localTime(day).date() === localTime().date();
