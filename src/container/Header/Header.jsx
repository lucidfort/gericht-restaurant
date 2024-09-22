import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading
        subtext="Chase the new flavor"
        title={"The Key to Fine Dining"}
        position={"left"}
        titleClassName="app__header-h1"
      />
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis qui
        dolorem labore earum aut et perspiciatis inventore facere?
      </p>
      <button type="button" className="custom__button">
        Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
