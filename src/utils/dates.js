import moment from 'moment';
import { TIME_OFFSET } from '../settings';

export const parseTime = (time) => localTime(time).format('HH:mm');

/**
 *
 *
 * @param {*} time
 */
export const localTime = (time) => moment.utc(time).utcOffset(TIME_OFFSET);

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
  prayers.forEach((prayer) => results.add(fn(prayer.day, { month: 'long' })));
  return Array.from(results).join(separator);
};

/**
 *
 *
 * @param {*} prayer
 */
export const isToday = (day) => localTime(day).date() === localTime().date();
