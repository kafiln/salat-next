import prayers from "../../public/data/prayers.json";

const utcMonth = (day) => new Date(day).getUTCMonth();
const utcDate = (day) => new Date(day).getUTCDate();

export const getPrayers = (cityId, month, day) => {
  let result = [...prayers];

  if (cityId) {
    result = result.filter((e) => e.id === cityId);
  }
  if (month) {
    result = result.filter((e) => utcMonth(e.day) === month);
  }
  if (day) {
    result = result.filter((e) => utcDate(e.day) === day);
  }
  return result;
};
