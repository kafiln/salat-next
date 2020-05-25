import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const router = useRouter();
  const { id } = useContext(AppContext);
  const active = "font-bold underline";

  const isActive = (router, path) =>
    router.pathname === `/${path}` ? active : "";
  return (
    <div>
      <Link href="/monthly/[id]" as={`/monthly/${id}`}>
        <a className={isActive(router, "monthly")}>Monthly</a>
      </Link>
      <Link href="/daily/[id]" as={`/daily/${id}`}>
        <a className={isActive(router, "daily")}>Daily</a>
      </Link>
    </div>
  );
}

export default Navbar;
