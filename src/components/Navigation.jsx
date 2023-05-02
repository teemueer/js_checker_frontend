import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = ({ user, logout }) => {
  const [t, i18n] = useTranslation("common");

  return (
    <nav className="font-sans flex flex-col sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <Link
          to="/"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          HTML & JS Checker
        </Link>
        <span>
          <button
            onClick={() => {
              i18n.changeLanguage("en");
              window.localStorage.setItem("language", "en");
            }}
            className="text-xl mr-3"
          >
            🇬🇧
          </button>
          <button
            onClick={() => {
              i18n.changeLanguage("fi");
              window.localStorage.setItem("language", "fi");
            }}
            className="text-xl mr-3"
          >
            🇫🇮
          </button>
        </span>
      </div>

      {user && (
        <div>
          <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {t("navigation.logout")}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
