import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import SelectList from "../components/select-list";
import { AppContext } from "../context/AppContext";
import { CHANGE_LANGUAGE } from "../context/types";

function Navbar() {
  const router = useRouter();

  const { id, cities, lang, periodicity, dispatch, theme } = useContext(
    AppContext
  );

  const active = "font-bold underline";

  const periods = ["daily", "monthly"];

  const isActive = (router, path) => {
    return router.asPath.startsWith(`/${path}`) ? active : "";
  };

  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Salat</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {periods.map((p) => (
            <Link key={p} href="/[periodicity]/[id]" as={`/${p}/${id}`}>
              <a
                className={`mr-5 hover:text-gray-900 capitalize ${isActive(
                  router,
                  p
                )}`}
              >
                {p}
              </a>
            </Link>
          ))}
        </nav>

        <button
          className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
          onClick={() => dispatch({ type: CHANGE_LANGUAGE })}
        >
          Language
        </button>
        {id && (
          <div className="flex justify-evenly">
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
      </div>
    </header>
  );
}

export default Navbar;
