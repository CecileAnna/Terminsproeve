import Heading5 from "../subcomponents/texts/Heading5";
import FiveStars from "./FiveStars";

const ClassesCards = (props) => {
  return (
    <>
      <div
        className={`classes-card ${
          props.smallCardTrue ? "classes-card-small" : " "
        }`}
        style={{ backgroundImage: `url(${props.bgUrl})` }}
       
      >
        <div
          className={`classes-card--corner-box
            ${props.smallCardTrue ? "classes-card--corner-box-small" : " "}`}
        >
          <Heading5
            text={props.cornerBoxText}
            styles={props.smallCardTrue ? "heading5-smaller" : ""}
          />
          <FiveStars
            smallCardTrue={true}
            starsColorsArray={props.starsColorsArray}
          />
        </div>
      </div>
    </>
  );
};

export default ClassesCards;
