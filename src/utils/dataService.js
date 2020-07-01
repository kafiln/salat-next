import moment from 'moment';
import cities from '../../public/data/cities.json';
import prayers from '../../public/data/prayers.json';
import { LOCALES } from '../i18n';

const utcMonth = (day) => new Date(day).getUTCMonth();
const utcDate = (day) => new Date(day).getUTCDate();

/**
 *
 *
 * @param {*} slug
 * @param {*} isRTL
 */
export const getCity = (slug, isRTL) => {
  const locale = isRTL ? LOCALES.ARABIC.id : LOCALES.FRENCH.id;
  return cities.find((e) => e.slug === slug).names[locale];
};

/**
 *
 *
 * @param {*} slug
 * @param {*} first
 * @param {*} last
 * @returns
 */
export const getPrayersForPeriod = (slug, first, last) => {
  const results = [];
  const firstDay = moment.utc(first);
  const lastDay = moment.utc(last).add(1, 'day');

  while (firstDay.toISOString() !== lastDay.toISOString()) {
    const prayer = getPrayers(slug, firstDay.month(), firstDay.date());
    results.push(prayer[0]);
    firstDay.add(1, 'day');
  }

  return results;
};

/**
 *
 *
 * @param {*} slug
 * @param {*} month
 * @param {*} day
 * @returns
 */
export const getPrayers = (slug, month, day) => {
  let result = [...prayers];

  if (slug) {
    result = result.filter((e) => e.id === idFromSlug(slug));
  }
  if (month) {
    result = result.filter((e) => utcMonth(e.day) === month);
  }
  if (day) {
    result = result.filter((e) => utcDate(e.day) === day);
  }
  return result;
};

/**
 *
 *
 * @param {*} slug
 */
export const idFromSlug = (slug) => cities.find((c) => c.slug === slug).id;
