import { images } from "../../constants";

const SubHeading = ({
  title,
  subtext,
  subClassName,
  position,
  spoon = false,
  className,
  titleClassName,
}) => {
  return (
    <div className={className}>
      {subtext && (
        <div
          style={{ marginBottom: "1rem" }}
          className={`w-max ${subClassName}`}
        >
          <p className="p__cormorant">{subtext}</p>

          <div
            className={`${
              position === "right"
                ? "flex justify-end items-end"
                : position === "left"
                ? "flex justify-start items-start"
                : "flex__center"
            }`}
          >
            <img src={images.spoon} alt="spoon" className="spoon__img" />
          </div>
        </div>
      )}

      <div>
        <h2 className={titleClassName || "headtext__cormorant"}>{title}</h2>

        {spoon && (
          <div
            className={`${
              position === "right"
                ? "flex justify-end items-end"
                : position === "left"
                ? "flex justify-start items-start"
                : ""
            }`}
          >
            <img src={images.spoon} alt="spoon" className="spoon__img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SubHeading;
