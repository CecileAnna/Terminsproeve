import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Heading4 from "../subcomponents/texts/Heading4";
import Heading5 from "../subcomponents/texts/Heading5";
import Paragraf from "../subcomponents/texts/Paragraf";

const Classes = () => {
  return (
    <>
      <PageHeader text="Popular classes" />
      <h1>Classes page</h1>
      <Link to="/Classes/test">
        <h2>Classes Cards</h2>
      </Link>
      <Heading4 text="Popular trainers" />
      <Heading5 text="Lower abs workout" styles="heading5-smaller" />
      <Paragraf
        text="We learn a few easy yoga positions f or a
better posture and well being."
      />
      
    </>
  );
};

export default Classes;
