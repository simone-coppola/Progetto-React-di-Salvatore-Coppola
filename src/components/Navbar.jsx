import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faUser,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../style/Navbar.css";
import { useMenu } from "../context/MenuContext";

const menuIcon = <FontAwesomeIcon icon={faBars} />;
const dropMenuIcon = <FontAwesomeIcon icon={faAngleDown} />;
const userIcon = <FontAwesomeIcon icon={faUser} />;

function Navbar() {
  const { menuOpen, setMenuOpen } = useMenu();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="MobileNavbar">
        <button className="MenuButton" onClick={toggleMenu}>
          {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : menuIcon}
        </button>
        {!menuOpen && <h1>The New York Times</h1>}
        {!menuOpen && <button className="UserButton">{userIcon}</button>}
      </div>

      <div className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="SearchSection">
          <input type="text" placeholder="Search" />
          <button>GO</button>
        </div>

        <ul>
          <li>
            <span> U.S.</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>World</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>Business</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>Arts</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>Lifestyle</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>Opinion</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>Video</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>Audio</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>Games</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>Cooking</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>Wirecutter</span>
            {dropMenuIcon}
          </li>
          <li>
            <span>The Athletic</span>
            {dropMenuIcon}
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;