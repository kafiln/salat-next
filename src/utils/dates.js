import moment from 'moment';
import { TIME_OFFSET } from '../settings';

export const parseTime = (time) => localTime(time).format('HH:mm');

export /**
 *
 *
 * @param {*} time
 */
const localTime = (time) => moment.utc(time).utcOffset(TIME_OFFSET);

/**
 *
 *
 * @param {*} prayers
 * @param {*} fn
 * @returns
 */
export const getGeorgianMonths = (prayers, fn) => {
  const results = new Set();
  prayers.forEach((prayer) => results.add(fn(prayer.day, { month: 'long' })));
  return Array.from(results).join('/');
};

/**
 *
 *
 * @param {*} prayer
 */
export const isToday = (day) => localTime(day).date() === localTime().date();
