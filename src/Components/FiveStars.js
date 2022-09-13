import StarIcon from "../subcomponents/icons/StarIcon";

const FiveStars = (props) => {
  return (
    <>
      <div
        className={`stars--wrapper ${props.styles} ${
          props.smallCardTrue ? "stars--wrapper-small" : " "
        }`}
        style={{ backgroundImage: `url(${props.bgUrl})` }}
      >
        {props.starsColorsArray.map((starColor, index) => (
          <StarIcon styles={`${starColor.classes}`} key={index} />
        ))}
      </div>
    </>
  );
};

export default FiveStars;
