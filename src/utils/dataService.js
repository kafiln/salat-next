import cities from '../../public/data/cities.json';
import prayers from '../../public/data/prayers.json';
import { LOCALES } from '../i18n';
import { localTime, utcDate, utcMonth, utcYear } from './dates';

/**
 *
 *
 * @param {*} slug
 * @param {*} isRTL
 */
export const getCity = (slug, isRTL = false) => {
  const locale = isRTL ? LOCALES.ARABIC.id : LOCALES.FRENCH.id;
  return cities.find(e => e.slug === slug).names[locale];
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
  let firstDay = localTime(first);
  const lastDay = localTime(last).add(1, 'day');

  while (!firstDay.isSame(lastDay)) {
    const prayer = getPrayers(
      slug,
      firstDay.month(),
      firstDay.date(),
      firstDay.year()
    );
    results.push(prayer[0]);
    firstDay = firstDay.add(1, 'd');
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
export const getPrayers = (slug, month, day, year) => {
  let result = [...prayers];

  if (slug) {
    result = result.filter(e => e.id === idFromSlug(slug));
  }
  if (year) {
    result = result.filter(e => utcYear(e.day) === year);
  }
  if (month) {
    result = result.filter(e => utcMonth(e.day) === month);
  }
  if (day) {
    result = result.filter(e => utcDate(e.day) === day);
  }

  return result;
};

/**
 *
 *
 * @param {*} slug
 */
export const idFromSlug = slug => cities.find(c => c.slug === slug).id;

/**
 *
 *
 * @param {boolean} [isRTL=false]
 */
export const getAllCities = (isRTL = false) =>
  cities.map(e => ({
    value: e.slug,
    label: e.names[isRTL ? LOCALES.ARABIC.id : LOCALES.FRENCH.id]
  }));
