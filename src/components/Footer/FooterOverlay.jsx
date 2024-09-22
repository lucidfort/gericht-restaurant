import "./FooterOverlay.css";

const FooterOverlay = () => (
  <div className="w-full h-full z-[1] flex flex-col absolute">
    <div className="h-[25%] bg-[var(--color-black)]" />
    <div className="h-[75%] app__bg" />
  </div>
);

export default FooterOverlay;
