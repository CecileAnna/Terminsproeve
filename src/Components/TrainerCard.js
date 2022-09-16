import Heading5 from "../subcomponents/texts/Heading5";

const TrainerCard = (props) => {
  return (
    <>
      <div className={`trainer-card ${props.styles}`}>
        <img src={props.url} alt="trainer portrait" className="trainer-card--img"/>
        <Heading5 text={props.trainerName} styles="trainer-card--name"/>
      </div>
    </>
  );
};

export default TrainerCard;
