import { useSelector } from "react-redux";

const SchemaDropDown = (props) => {
  const validSchema = useSelector((state) => state.schema);
  console.log(validSchema);
  const schemaChangeHandler = (event) => {
    console.log(event.target.value);
    props.onSetSchema(event.target.value);
  };
  return (
    <div className="schemaDropDownArea">
      <select
        onChange={schemaChangeHandler}
        value={props.initialValue}
        className="schemaDropDownBox"
      >
        <option>select schema</option>
        {validSchema.map((schemaOption) => {
          return (
            <option
              className="dropDownOptions"
              value={schemaOption.id}
              key={schemaOption.id}
            >
              {schemaOption.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SchemaDropDown;
