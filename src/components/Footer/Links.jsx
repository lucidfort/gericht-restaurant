import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { images } from "../../constants";

import "./Links.css";

const Links = () => {
  return (
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h2 className="app__footer-headtext">Contact Us</h2>
        <p className="p__opensans">
          789 Pine Avenue, Apartment 12B, Abuja, Nigeria
        </p>
        <p className="p__opensans">+234 810 123 4567</p>
        <p className="p__opensans">+234 909 765 4321</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="Gericht" />
        <p className="p__opensans">
          The best way to find yourself is to yourself in the service of others
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h2 className="app__footer-headtext">Working Hours</h2>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">8:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">7:00 am - 11:00 pm</p>
      </div>
    </div>
  );
};

export default Links;
