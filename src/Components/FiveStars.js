import StarIcon from "../subcomponents/icons/StarIcon";

const FiveStars = (props) => {
  return (
    <>
      <div
        className={`stars--wrapper ${
          props.smallCardTrue ? "stars--wrapper-small" : " "
        }`}
        style={{ backgroundImage: `url(${props.bgUrl})` }}
      >
        {props.starsColorsArray.map((starColor) => (
          <StarIcon styles={`${starColor.classes}`} key={starColor.id} />
        ))}
      </div>
    </>
  );
};

export default FiveStars;
