import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Classes = () => {
  return (
    <>
      <PageHeader text="Popular classes" />
      <h1>Classes page</h1>
      <Link to="/Classes/test">
        <h2>Classes Cards</h2>
      </Link>
    </>
  );
};

export default Classes;
