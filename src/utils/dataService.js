import moment from 'moment';
import cities from '../../public/data/cities.json';
import prayers from '../../public/data/prayers.json';

const utcMonth = (day) => new Date(day).getUTCMonth();
const utcDate = (day) => new Date(day).getUTCDate();

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

export const idFromSlug = (slug) => cities.find((c) => c.slug === slug).id;
