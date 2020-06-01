import moment from "moment";
import { TIME_OFFSET } from "../settings";

export const parseTime = (time) => {
  return moment.utc(time).utcOffset(TIME_OFFSET).format("HH:mm");
};
