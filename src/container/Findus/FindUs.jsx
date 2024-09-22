import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading
          subtext="Contact"
          title="Find Us"
          titleClassName="headtext__cormorant mb-12"
          position="left"
        />

        <div className="app__wrapper-content">
          <p className="p__opensans">
            1234 Elm Street, Suite 567, Lagos, Nigeria
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>

        <button className="custom__button" style={{ marginTop: "2rem" }}>
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="find us" />
      </div>
    </div>
  );
};

export default FindUs;
