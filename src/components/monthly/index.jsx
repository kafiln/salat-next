import moment from "moment";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FormattedDate, FormattedMessage } from "react-intl";
import Spinner from "../../common/spinner";
import { AppContext } from "../../context/AppContext";
import { KEYS } from "../../i18n";
import { parseTime } from "../../utils/dates";
import Clock from "../clock";
import SelectList from "../select-list";
import { Table, Tbody, Td, Thead, Tr } from "./styles";
const NAMES = require("../../../public/data/prayers.json");

const NAMES_FR = Object.keys(NAMES).map((e) => e);

const Monthly = ({ prayers }) => {
  const { time, lang, dispatch, id, cities, periodicity } = useContext(
    AppContext
  );
  const router = useRouter();
  const today = new Date().getDate();

  const table = (
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
      <Clock />
      {/* //TODO:  Intl this 👇👇 and remove inline style */}
      <h1 style={{ textAlign: "center", margin: "0.5rem 0" }}>
        Prayers for month&nbsp;
        <span style={{ textDecoration: "underline" }}>
          {prayers && moment.utc(prayers[0].day).format("MMM YYYY")}
        </span>
      </h1>

      <Table>
        <Thead>
          <Tr lang={lang} className="header">
            <Td className="first">
              <FormattedMessage id={KEYS.DAY} />
            </Td>
            {Object.keys(NAMES).map((name, i) => {
              return (
                <Td key={i}>
                  {NAMES[name][lang === "ar-ma" ? "ar-ma" : "fr-fr"]}
                </Td>
              );
            })}
          </Tr>
        </Thead>

        <Tbody>
          {Object.entries(prayers || []).map(([_, prayer], i) => {
            return (
              <Tr
                lang={lang}
                key={i}
                className={`${
                  new Date(prayer.day).getDate() === today ? "today" : ""
                }`}
              >
                <Td className="first">
                  <FormattedDate
                    value={new Date(prayer.day)}
                    month="long"
                    day="numeric"
                    weekday="long"
                  ></FormattedDate>
                </Td>
                {NAMES_FR.map((name, j) => (
                  <Td key={j}>{parseTime(prayer[name])}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );

  return (prayers || []).length > 0 ? table : <Spinner />;
};

export default Monthly;
