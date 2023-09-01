const Dots = (props) => {
  if (props.type === "green") {
    return <div className="greenDot"></div>;
  } else if (props.type === "red") {
    return <div className="redDot"></div>;
  }
};
export default Dots;
