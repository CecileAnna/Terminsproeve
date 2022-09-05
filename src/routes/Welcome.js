import { Link } from "react-router-dom";
import Btn from "../components/Btn";
import SubHeading from "../subcomponents/texts/SubHeading";
import Title from "../subcomponents/texts/Title";

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
            <Title text="Believe Yourself" />
            <SubHeading text="Train like a pro" />
          </div>
          <Link to="/Classes" className="welcome--btn">
            <Btn text="start training" styles="btn welcome--btn" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
