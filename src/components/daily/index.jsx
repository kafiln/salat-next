import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../common/spinner";
import { AppContext } from "../../context/AppContext";
import { REFRESH_TIME } from "../../context/types";
import useInterval from "../../hooks/useInterval";
import { DEFAULT_TIME_FORMAT } from "../../settings";
import { parseTime } from "../../utils/dates";
import Clock from "../clock";
import { Difference, Li, Name, Time, Ul } from "./styles";

const NAMES = require("../../../public/data/prayers.json");
const cities = require("../../../public/data/cities.json");

const Daily = ({ id, prayers }) => {
  const { time, lang, dispatch } = useContext(AppContext);
  let prayer = (prayers || [])[0];

  let [state, setState] = useState({});

  const thick = () => {
    dispatch({ type: REFRESH_TIME });
  };

  useEffect(() => {
    if (prayer) {
      const nextOnes = Object.keys(prayer).filter((t) =>
        time.isBefore(moment(prayer[t]))
      );
      const next = nextOnes.length === 0 ? Object.keys(NAMES)[0] : nextOnes[0];
      const diff = moment(moment(prayer[next]).diff(time)).format(
        DEFAULT_TIME_FORMAT
      );
      setState({ next, diff });
    }
  }, [prayer, time]);

  useInterval(thick, 1000);

  const { next, diff } = state;

  return prayer ? (
    <>
      <Clock displayClock time={time} day={prayer.day} />
      <Ul>
        {Object.keys(NAMES).map((name) => {
          return (
            <Li key={name} lang={lang} className={name === next ? "next" : ""}>
              <Name>{NAMES[name][lang]}</Name>
              {name === next && <Difference>{diff}</Difference>}
              <Time>{parseTime(prayer[name])}</Time>
            </Li>
          );
        })}
      </Ul>
    </>
  ) : (
    <Spinner />
  );
};
export default Daily;
