import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CHANGE_LANGUAGE, CHANGE_THEME } from "../context/types";

function Navbar() {
  const router = useRouter();

  const { id, lang, theme, periodicity, dispatch } = useContext(AppContext);

  const active = "font-bold underline capitalize";

  const periods = ["daily", "monthly"];

  const isActive = (router, path) => {
    return router.asPath.startsWith(`/${path}`) ? active : "";
  };

  return (
    <div className="flex justify-evenly">
      <div className="flex justify-evenly flex-1">
        {periods.map((p) => (
          <Link key={p} href="/[periodicity]/[id]" as={`/${p}/${id}`}>
            <a className={isActive(router, p)}>{p}</a>
          </Link>
        ))}
      </div>
      <div className="flex justify-evenly flex-1">
        <button onClick={() => dispatch({ type: CHANGE_THEME })}>Theme</button>
        <button onClick={() => dispatch({ type: CHANGE_LANGUAGE })}>
          Languge
        </button>
      </div>
    </div>
  );
}

export default Navbar;
