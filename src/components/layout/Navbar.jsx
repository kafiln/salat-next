import { APPLICATION_NAME } from '../../settings';
import { LanguageSwitch, Logo, ThemeToggle } from '../common';
function Navbar() {
  return (
    <section className="bg-gray-300 py-1 sm:py-2 border-b border-gray-500">
      <nav className="flex container mx-auto items-center">
        <div className="py-2 flex justify-center">
          <ThemeToggle />
        </div>
        <div className="py-2 flex flex-col mx-auto">
          <Logo size={48} />
          <div className="ml-3 text-xl">{APPLICATION_NAME}</div>
        </div>
        <div className="py-2">
          <LanguageSwitch />
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
