import Dots from "./Dots";

const SelectedSchema = (props) => {
  return (
    <div className="selectedSchema">
      <span>
        {props.schema.type === "user" ? (
          <Dots type="green" />
        ) : (
          <Dots type="red" />
        )}
      </span>
      <div className="schemaName">{props.schema.name}</div>
    </div>
  );
};
export default SelectedSchema;
