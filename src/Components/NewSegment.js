import PopUp from "../UI/PopUp";
import Dots from "./Dots";
import SchemaDropDown from "./SchemaDropDown";
import SelectedSchema from "./SelectedSchema";
import { useState } from "react";
const NewSegment = () => {
  const [segmentName, setSegmentName] = useState("");
  const [selectSchema, setSelectSchema] = useState("");
  const [selectedSchema, setSelectedSchema] = useState([]);
  const onSetSchema = (schemaname) => {
    console.log(schemaname);
    setSelectSchema(schemaname);
  };
  const onAddSchema = () => {
    if (selectSchema === "1") {
      setSelectedSchema((selectedSchema) => [
        ...selectedSchema,
        {
          name: "First Name",
          type: "user",
        },
      ]);
    } else if (selectSchema === "2") {
      setSelectedSchema((selectedSchema) => [
        ...selectedSchema,
        {
          name: "Last Name",
          type: "user",
        },
      ]);
    } else if (selectSchema === "3") {
      setSelectedSchema((selectedSchema) => [
        ...selectedSchema,
        {
          name: "Gender",
          type: "user",
        },
      ]);
    } else if (selectSchema === "4") {
      setSelectedSchema((selectedSchema) => [
        ...selectedSchema,
        {
          name: "Age",
          type: "user",
        },
      ]);
    } else if (selectSchema === "5") {
      setSelectedSchema((selectedSchema) => [
        ...selectedSchema,
        {
          name: "Account Name",
          type: "group",
        },
      ]);
    } else if (selectSchema === "6") {
      setSelectedSchema((selectedSchema) => [
        ...selectedSchema,
        {
          name: "State",
          type: "user",
        },
      ]);
    }
  };
  const nameChangehandler = (event) => {
    setSegmentName(event.target.value);
  };
  return (
    <PopUp>
      <div className="segmentName">
        <label>Enter the name of the segment</label>
        <input
          className="nameInput"
          placeholder="Name of the segment"
          onChange={nameChangehandler}
          value={segmentName}
        />
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
              return (
                <SelectedSchema
                  key={schema.name}
                  schemaname={schema.name}
                  schematype={schema.type}
                />
              );
            })
          ) : (
            <div>Enter new schema to begin</div>
          )}
        </div>

        <SchemaDropDown onSetSchema={onSetSchema} />
      </div>
      <div className="addSchema">
        <span onClick={onAddSchema}>+ Add new schema</span>
      </div>
      <div className="btnSection">
        <button className="saveBtn">Save the segment</button>
        <button className="cancelBtn">Cancel</button>
      </div>
    </PopUp>
  );
};
export default NewSegment;
