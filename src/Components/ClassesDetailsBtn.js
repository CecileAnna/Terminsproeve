const ClassesDetailsBtn = (props) => {
    return ( 
        <button className={`classes-details-btn ${props.styles}`}>{props.text}</button>
     );
}
 
export default ClassesDetailsBtn;