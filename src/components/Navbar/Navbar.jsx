import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { data, images } from "../../constants";

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="w-full flex justify-between items-center bg-[var(--color-black)] py-4 px-8 app__navbar">
      <div className="flex justify-start items-center app__navbar-logo">
        <img src={images.gericht} alt="Gericht" className="w-[150px]" />
      </div>

      <ul className="flex-1 flex justify-center items-center list-none app__navbar-links">
        {data.navLinks.map((item) => (
          <li
            key={item.title}
            className="p__opensans my-0 mx-4 cursor-pointer hover:text-[var(--color-grey)]"
          >
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>

        <div />

        <a href="#login" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="cursor-pointer"
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu === true && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen_links">
              {data.navLinks.map((item) => (
                <li key={item.title}>
                  <a href={item.href} onClick={() => setToggleMenu(false)}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
