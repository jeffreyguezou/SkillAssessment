import PopUp from "../UI/PopUp";
import Dots from "./Dots";
import SchemaDropDown from "./SchemaDropDown";
import SelectedSchema from "./SelectedSchema";
const NewSegment = () => {
  const selectedSchema = [
    {
      name: "First Name",
      type: "user",
    },
    {
      name: "Account Name",
      type: "group",
    },
  ];
  const onAddSchema = (schema) => {
    selectedSchema.push(schema);
  };
  return (
    <PopUp>
      <div className="segmentName">
        <label>Enter the name of the segment</label>
        <input className="nameInput" />
      </div>
      <div className="schemaSection">
        <div className="schemaSection">
          To save your segment, you need to add the schemas to build the query
        </div>
        <div className="traits">
          <Dots type="green" />
          <span>- User Traits</span>
          <Dots type="red" />
          <span>- Group Traits</span>
        </div>
        <div className="selectedSchemas">
          {selectedSchema.length > 0 ? (
            selectedSchema.map((schema) => {
              return <SelectedSchema schema={schema} />;
            })
          ) : (
            <div>Enter new schema to begin</div>
          )}
        </div>

        <SchemaDropDown onAddSchema={onAddSchema} />
      </div>
      <div className="addSchema">
        <span>+ Add new schema</span>
      </div>
      <div className="btnSection">
        <button className="saveBtn">Save the segment</button>
        <button className="cancelBtn">Cancel</button>
      </div>
    </PopUp>
  );
};
export default NewSegment;
