import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import SelectList from "../components/select-list";
import { AppContext } from "../context/AppContext";
import {
  CHANGE_CITY,
  CHANGE_LANGUAGE,
  CHANGE_PERIOD,
  CHANGE_THEME,
} from "../context/types";

function Navbar() {
  const router = useRouter();

  const { id, cities, lang, theme, periodicity, dispatch } = useContext(
    AppContext
  );

  const active = "font-bold underline capitalize";

  const periods = ["daily", "monthly"];

  const isActive = (router, path) => {
    return router.asPath.startsWith(`/${path}`) ? active : "";
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-around">
        <div className="flex justify-evenly flex-1">
          {periods.map((p) => (
            <Link key={p} href="/[periodicity]/[id]" as={`/${p}/${id}`}>
              <a
                onClick={() => dispatch({ type: CHANGE_PERIOD, payload: p })}
                className={isActive(router, p)}
              >
                {p}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex justify-evenly flex-1">
          <button onClick={() => dispatch({ type: CHANGE_THEME })}>
            Theme
          </button>
          <button onClick={() => dispatch({ type: CHANGE_LANGUAGE })}>
            Language
          </button>
        </div>
      </div>
      {id && (
        <div className="flex justify-evenly">
          <SelectList
            cities={cities}
            id={id}
            lang={lang}
            onChange={({ value }) => {
              dispatch({ type: CHANGE_CITY, payload: value });
              router.push(`/${periodicity}/${value}`);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
