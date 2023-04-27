import { Link } from "react-router-dom";

const Navigation = ({ user, logout }) => (
  <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
    <div className="mb-2 sm:mb-0">
      <Link
        to="/"
        className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
      >
        HTML & JS Checker
      </Link>
    </div>
    <div>
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Logout
      </button>
    </div>
  </nav>
);

export default Navigation;
