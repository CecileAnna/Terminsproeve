import SubHeading from "../subcomponents/texts/SubHeading";
import Heading2 from "../subcomponents/texts/Heading2";
import HeaderPwa from "../components/HeaderPwa";

const OfflinePage = () => {
  return (
    <>
      <div role="banner" className="background-imgs">
        <div className="welcome--img-wrapper">
          <img
            className="welcome--img"
            src={process.env.PUBLIC_URL + "images/welcome-background.jpg"}
            alt="🐛"
          />
        </div>
        <div className="welcome--img-2-wrapper">
          <img
            className="welcome--img-2"
            src={process.env.PUBLIC_URL + "images/welcome-center.jpg"}
            alt="🐛"
          />
        </div>

        <div className="welcome--content-wrapper">
          <div className="welcome--titles-wrapper">
            <Heading2 text="You're offline!" />
            <SubHeading text="Go online to access content" />
          </div>
          <HeaderPwa />
        </div>
      </div>
    </>
  );
};

export default OfflinePage;
