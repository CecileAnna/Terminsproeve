import { Link } from "react-router-dom";
import ClassesCards from "../components/ClassesCard";
import PageHeader from "../components/PageHeader";
import WrapperCenterContent from "../components/WrapperCenterContent";
import Heading4 from "../subcomponents/texts/Heading4";

const Classes = () => {
  const starColorsSmall = [
    { classes: "star-smaller", id: 1 },
    { classes: "star-smaller", id: 2 },
    { classes: "star-smaller", id: 3 },
    { classes: "star-smaller", id: 4 },
    { classes: "star-smaller", id: 5 },
  ];
  return (
    <>
      <PageHeader text="Popular classes" />

      <WrapperCenterContent>
        <Link to="/Classes/test" style={{ textDecoration: "none" }}>
          <ClassesCards
            cornerBoxText="Lower abs workout"
            starsColorsArray={starColorsSmall}
          />
        </Link>

        <div className="classes--bottom-wrapper">
          <Heading4 text="Classes for you" />

          <div className="classes--small-cards-container">
            <ClassesCards
              cornerBoxText="Lower abs workout"
              starsColorsArray={starColorsSmall}
              smallCardTrue={true}
            />
            <ClassesCards
              cornerBoxText="Lower abs workout"
              starsColorsArray={starColorsSmall}
              smallCardTrue={true}
            />
            <ClassesCards
              cornerBoxText="Lower abs workout"
              starsColorsArray={starColorsSmall}
              smallCardTrue={true}
            />
          </div>
        </div>
      </WrapperCenterContent>
    </>
  );
};

export default Classes;
