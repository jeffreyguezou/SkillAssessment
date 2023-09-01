const SchemaDropDown = (props) => {
  const schemaOptions = [
    { id: 1, schema: "Label: First Name Value: first_name", trait: "user" },
    { id: 2, schema: "Label: Last Name Value: last_name", trait: "user" },
    { id: 3, schema: "Label: Gender Value: gender", trait: "user" },
    { id: 4, schema: "Label: Age Value: age", trait: "user" },
    {
      id: 5,
      schema: "Label: Account Name Value: account_name",
      trait: "group",
    },
    { id: 6, schema: "Label: City Value: city", trait: "group" },
    { id: 7, schema: "Label: State Value: state", trait: "group" },
  ];
  return (
    <div className="schemaDropDownArea">
      <select className="schemaDropDownBox">
        {schemaOptions.map((schemaOption) => {
          return (
            <option key={schemaOption.id}>
              <span>{schemaOption.schema}</span>
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SchemaDropDown;
