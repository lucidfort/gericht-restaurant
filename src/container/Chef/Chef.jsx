import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading
        title="What We Believe In"
        subtext="Chef's Word"
        position={"left"}
      />

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            illum non, esse nisi iure tempora asperiores harum.
          </p>
        </div>

        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          inventore non labore laudantium nulla sapiente quaerat, magnam, soluta
          rem numquam est maiores distinctio dolores! Voluptatem corporis culpa
          totam sed voluptatum.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
