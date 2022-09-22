import { IoIosClose } from "react-icons/io";

const CloseIcon = (props) => {
  return (
    <IoIosClose
      className={`close ${props.styles}`}
      onClick={props.handleClick}
    />
  );
};

export default CloseIcon;
