import Heading4 from "../subcomponents/texts/Heading4";
import Heading5 from "../subcomponents/texts/Heading5";
import WrapperCenterContent from "../components/WrapperCenterContent";


const ScheduleCard = (props) => {


  return (
    <>
      <WrapperCenterContent>
        <div className="schedule--card">
          <Heading4 text={props.textTitle} styles="schedule--title" />
          <Heading5 text={props.textTime} />
        </div>
      </WrapperCenterContent>
    </>
  );
};

export default ScheduleCard;
