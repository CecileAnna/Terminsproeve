import { Link } from "react-router-dom";
import Btn from "../components/Btn";
import SubHeading from "../subcomponents/texts/SubHeading";
import Heading2 from "../subcomponents/texts/Heading2";

const Welcome = () => {
  return (
    <>
      <div role="banner" className="background-imgs">
        <div className="welcome--img-wrapper">
          <img
            className="welcome--img"
            src={process.env.PUBLIC_URL + "images/welcome-background.jpg"}
            alt="training cover"
          />
        </div>
        <div className="welcome--img-2-wrapper">
          <img
            className="welcome--img-2"
            src={process.env.PUBLIC_URL + "images/welcome-center.jpg"}
            alt="training cover"
          />
        </div>

        <div className="welcome--content-wrapper">
          <div className="welcome--titles-wrapper">
            <Heading2 text="Believe Yourself" />
            <SubHeading text="Train like a pro" />
          </div>
          <Link to="/Classes" className="welcome--btn">
            <Btn text="start training" styles="welcome--btn" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
