const SchemaDropDown = (props) => {
  const schemaOptions = [
    { id: 1, label: "Label: First Name Value: first_name" },
    { id: 2, label: "Label: Last Name Value: last_name" },
    { id: 3, label: "Label: Gender Value: gender" },
    { id: 4, label: "Label: Age Value: age" },
    { id: 5, label: "Label: Account Name Value: account_name" },
    { id: 6, label: "Label: State Value: state" },
  ];
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
        {schemaOptions.map((schemaOption) => {
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
