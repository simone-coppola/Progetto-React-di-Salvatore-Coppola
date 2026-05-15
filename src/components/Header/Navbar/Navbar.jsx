import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faUser,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import "../../../style/Header/Navbar.css";
import { useMenu } from "../../../context/MenuContext";

import {
  Arts,
  Audio,
  Business,
  Cooking,
  Games,
  Lifestyle,
  Opinion,
  TheAthletic,
  US,
  Video,
  Wirecutter,
  World,
} from "./dropMenuElements";

const dropMenuElements = {
  "U.S.": <US />,
  World: <World />,
  Business: <Business />,
  Arts: <Arts />,
  Lifestyle: <Lifestyle />,
  Opinion: <Opinion />,
  Video: <Video />,
  Audio: <Audio />,
  Wirecutter: <Wirecutter />,
  "The Athletic": <TheAthletic />,
  Games: <Games />,
  Cooking: <Cooking />,
};

const menuItems = [
  "U.S.",
  "World",
  "Business",
  "Arts",
  "Lifestyle",
  "Opinion",
  "Video",
  "Audio",
  "Games",
  "Cooking",
  "Wirecutter",
  "The Athletic",
];

function Navbar() {
  const { menuOpen, setMenuOpen } = useMenu();

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDropdown = (item) => {
    setOpenDropdown((prev) => (prev === item ? null : item));
  };

  return (
    <>
      <div className="MobileNavbar">
        <button className="MenuButton" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {!menuOpen && <h1>The New York Times</h1>}

        {!menuOpen && (
          <button className="UserButton">
            <FontAwesomeIcon icon={faUser} />
          </button>
        )}
      </div>

      <div className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="SearchSection">
          <input type="text" placeholder="Search" />
          <button>GO</button>
        </div>

        <ul>
          {menuItems.map((item) => (
            <li key={item}>
              <span className="MenuItem" onClick={() => handleDropdown(item)}>
                {item}

                <FontAwesomeIcon
                  icon={faAngleDown}
                />
              </span>

              {openDropdown === item && (
                <div className="dropdownContent">{dropMenuElements[item]}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
