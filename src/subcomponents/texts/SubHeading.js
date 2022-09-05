const SubHeading = (props) => {
  return (
    <>
      <div className={`sub-heading ${props.styles}`}>
        <hr className="sub-heading--line"></hr>
        <h3 className="sub-heading--text">{props.text}</h3>
      </div>
    </>
  );
};

export default SubHeading;
