import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <SubHeading
      title="Today's Special"
      subtext="Menu that fits your palate"
      subClassName="mx-auto"
      position="right"
      className="app__specialMenu-title"
    />

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={index} item={wine} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img w-[650px]">
        <img src={images.menu} alt="menu img" className="h-[800px]" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={index} item={cocktail} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More{" "}
      </button>
    </div>
  </div>
);

export default SpecialMenu;
