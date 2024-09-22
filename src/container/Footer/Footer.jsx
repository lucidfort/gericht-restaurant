import { FooterOverlay, Links, Newsletter } from "../../components";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <Links />

    <div className="mt-12 z-[200]">
      <p className="p__opensans">
        {new Date().getFullYear()} Gericht, All Rights Reserved
      </p>
    </div>
  </div>
);

export default Footer;
