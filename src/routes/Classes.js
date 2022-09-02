import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <>
      <h1>Classes page</h1>
      <Link to="/ClassesDetails">
        <h2>Class card</h2>
      </Link>
    </>
  );
};

export default Classes;
