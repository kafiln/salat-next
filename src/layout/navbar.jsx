import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CHANGE_LANGUAGE, CHANGE_THEME } from "../context/types";

function Navbar() {
  const router = useRouter();

  const { id, lang, theme, periodicity, dispatch } = useContext(AppContext);

  const active = "font-bold underline";

  const isActive = (router, path) =>
    router.pathname.startsWith(`/${path}`) ? active : "";

  return (
    <div>
      <Link href="/monthly/[id]" as={`/monthly/${id}`}>
        <a className={isActive(router, "monthly")}>Monthly</a>
      </Link>
      <Link href="/daily/[id]" as={`/daily/${id}`}>
        <a className={isActive(router, "daily")}>Daily</a>
      </Link>

      <button onClick={() => dispatch({ type: CHANGE_THEME })}>Theme</button>
      <button onClick={() => dispatch({ type: CHANGE_LANGUAGE })}>
        Languge
      </button>
    </div>
  );
}

export default Navbar;
