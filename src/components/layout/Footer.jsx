import { FaGithub } from 'react-icons/fa';
import { APPLICATION_NAME } from '../../settings';
import { localTime } from '../../utils';
import { Logo } from '../common';

function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-gray-500">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="hidden sm:visible sm:flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Logo />
          <span className="ml-3 text-xl">{APPLICATION_NAME}</span>
        </a>
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {localTime().year()} {APPLICATION_NAME} —
          <a
            href="https://twitter.com/kafiiil"
            className=" ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @kafiiil
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="cursor-pointer"
            href="https://github.com/kafiln/salat-next"
          >
            {/* TODO Make the size reponsive */}
            <FaGithub size={18} />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
