import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import Languages from "../common/languages";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const router = useRouter();

  const { id } = useContext(AppContext);

  const active = "font-bold underline";

  const periods = ["daily", "monthly"];

  const isActive = (path) => {
    return router.asPath.startsWith(`/${path}`) ? active : "";
  };

  return (
    <header className="text-gray-700 body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* //TODO: Refactor this to a react component */}
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
                className={`mr-5 hover:text-gray-900 capitalize ${isActive(p)}`}
              >
                {p}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <a
              className={`mr-5 hover:text-gray-900 capitalize ${isActive(
                "contact"
              )}`}
            >
              Contact
            </a>
          </Link>
        </nav>

        <Languages />
      </div>
    </header>
  );
}

export default Navbar;
