import cities from "../../public/data/cities.json";
import prayers from "../../public/data/prayers.json";

const utcMonth = (day) => new Date(day).getUTCMonth();
const utcDate = (day) => new Date(day).getUTCDate();

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
