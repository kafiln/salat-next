import moment from "moment";

export const parseTime = (time) => {
  return moment.utc(time).format("HH:mm");
};
