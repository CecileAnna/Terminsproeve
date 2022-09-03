import Btn from "../components/Btn";
import WrapperCenterContent from "../components/WrapperCenterContent";
import ArrowLeftIcon from "../subcomponents/icons/ArrowLeftIcon";
import BarsIcon from "../subcomponents/icons/BarsIcon";
import CloseIcon from "../subcomponents/icons/CloseIcon";
import SearchIcon from "../subcomponents/icons/SearchIcon";
import StarIcon from "../subcomponents/icons/StarIcon";

const Welcome = () => {
  return (
    <>
      <WrapperCenterContent>
        <Btn text="start training" styles="btn" />
      </WrapperCenterContent>
    </>
  );
};

export default Welcome;
