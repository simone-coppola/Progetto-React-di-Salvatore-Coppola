import "../style/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import { useMenu } from "../context/MenuContext";

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

function Header() {
  const { menuOpen, setMenuOpen } = useMenu();

  return (
    <div className={`Header ${menuOpen ? "menu-open" : ""}`}>
      <section className="HeaderTop">
        {!menuOpen ? (
          <>
            <button className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <div className="HeaderButton">
              <button className="SubscribeButton">
                SUBSCRIBE FOR €0.50/WEEK
              </button>
              <button className="LoginButton">LOG IN</button>
            </div>
          </>
        ) : (
          <ul className="Language">
            <li>U.S.</li>
            <li>INTERNATIONAL</li>
            <li>CANADA</li>
            <li>ESPAÑOL</li>
            <li>中文</li>
          </ul>
        )}
      </section>

      {!menuOpen && (
        <section className="LogoAndDate">
          <div className="LinkAndDate">
            <p className={`Date`}>{today}</p>
            <a href="" className={`PaperLink ${!menuOpen ? "hidden" : ""}`}>
              Today's paper
            </a>
          </div>
          <h1 className="Logo">The New York Times</h1>
        </section>
      )}

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default Header;