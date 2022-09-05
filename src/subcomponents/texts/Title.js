const Title = (props) => {
  return (
    <>
      <h2 className={`title ${props.styles}`}>{props.text}</h2>
    </>
  );
};

export default Title;
