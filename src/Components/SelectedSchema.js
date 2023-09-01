import Dots from "./Dots";

const SelectedSchema = (props) => {
  return (
    <div className="selectedSchema">
      <span>
        {props.schematype === "user" ? (
          <Dots type="green" />
        ) : (
          <Dots type="red" />
        )}
      </span>
      <div className="schemaName">{props.schemaname}</div>
    </div>
  );
};
export default SelectedSchema;
