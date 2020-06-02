import moment from "moment";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../common/spinner";
import { AppContext } from "../../context/AppContext";
import { REFRESH_TIME } from "../../context/types";
import useInterval from "../../hooks/useInterval";
import { DEFAULT_TIME_FORMAT } from "../../settings";
import { parseTime } from "../../utils/dates";
import Clock from "../clock";
import SelectList from "../select-list";
import { Difference, Li, Name, Time, Ul } from "./styles";

const NAMES = require("../../../public/data/prayerNames.json");

const Daily = ({ prayers }) => {
  const { time, lang, dispatch, id, cities, periodicity } = useContext(
    AppContext
  );
  const router = useRouter();
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
      {id && (
        <div className="w-full mx-auto sm:w-1/2 md:w-1/4 flex justify-evenly">
          <SelectList
            cities={cities}
            id={id}
            lang={lang}
            onChange={({ value }) => {
              const redirect = `/${periodicity}/${value}`;
              router.push(`/[periodicity]/[id]`, redirect);
            }}
          />
        </div>
      )}
      <Clock displayTime time={time} day={prayer.day} />
      <Ul>
        {Object.keys(NAMES).map((name) => {
          return (
            <Li key={name} lang={lang} className={name === next ? "next" : ""}>
              <Name>{NAMES[name][lang === "ar-ma" ? "ar-ma" : "fr-fr"]}</Name>
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
