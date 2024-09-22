import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading
        subtext="Newsletter"
        title="Subscribe To Our Newsletter"
        position="left"
        subClassName={"mx-auto"}
      />

      <p className="p__opensans">And Never Miss Updates Again</p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email address"
      />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
