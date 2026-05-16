import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faUser,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
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
  { name: "U.S.", path: "/us" },
  { name: "World", path: "/world" },
  { name: "Business", path: "/business" },
  { name: "Arts", path: "/arts" },
  { name: "Lifestyle", path: "/lifestyle" },
  { name: "Opinion", path: "/opinion" },
  { name: "Video", path: "/video" },
  { name: "Audio", path: "/audio" },
  { name: "Games", path: "/games" },
  { name: "Cooking", path: "/cooking" },
  { name: "Wirecutter", path: "/wirecutter" },
  { name: "The Athletic", path: "/the-athletic" },
];

function Navbar() {
  const { menuOpen, setMenuOpen } = useMenu();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <li
              key={item.name}
              onMouseEnter={() => {
                if (!isMobile) {
                  setOpenDropdown(item.name);
                }
              }}
              onMouseLeave={() => {
                if (!isMobile) {
                  setOpenDropdown(null);
                }
              }}
            >
              {isMobile ? (
                <div
                  className="MobileMenuItem"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name,
                    )
                  }
                >
                  <span className="MenuItem">{item.name}</span>

                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              ) : (

                <NavLink to={item.path} className="DesktopMenuItem">
                  <span className="MenuItem">{item.name}</span>

                  <FontAwesomeIcon icon={faAngleDown} />
                </NavLink>
              )}

              {openDropdown === item.name && (
                <div className="dropdownContent">
                  {dropMenuElements[item.name]}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
