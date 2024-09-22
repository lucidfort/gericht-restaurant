import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <SubHeading title="About Us" spoon position={"right"} />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          distinctio praesentium atque! Necessitatibus dignissimos fuga
          veritatis voluptatum culpa. Culpa sapiente deserunt debitis impedit
          eum vitae quis, esse neque dolorem tenetur?
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife">
        <img
          src={images.knife}
          alt="about knife"
          className="w-auto h-[500px] sm:h-[570px] md:h-[620px] md:w-[400px]"
        />
      </div>

      <div className="app__aboutus-content_history">
        <SubHeading title="Our History" spoon position={"left"} />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          distinctio praesentium atque! Necessitatibus dignissimos fuga
          veritatis voluptatum culpa. Culpa sapiente deserunt debitis impedit
          eum vitae quis, esse neque dolorem tenetur?
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
