import MenuBtn from "./MenuBtn";
import { Link, useLocation } from "react-router-dom";
import ArrowLeftIcon from "../subcomponents/icons/ArrowLeftIcon";
import Heading3 from "../subcomponents/texts/Heading3";

const PageHeader = (props) => {
  let location = useLocation();
  let arrowTrue = false;

  if (location.pathname !== "/Classes") {
    arrowTrue = true;
  }

  return (
    <>
      <div className={`page-header--wrapper`}>
        <div className={`page-header--wrapper-title-arrow`}>
          {arrowTrue && (
            <Link to="/Classes">
              <ArrowLeftIcon styles={props.arrowColorWhite && `arrow-white`} />
            </Link>
          )}
          <Heading3 text={props.text} />
        </div>
        <MenuBtn barStyles={props.barsColorWhite} />
      </div>
    </>
  );
};

export default PageHeader;
