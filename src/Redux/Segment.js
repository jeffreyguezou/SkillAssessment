import { createSlice } from "@reduxjs/toolkit";
export const schemaSlice = createSlice({
  name: "schema",
  initialState: [
    { id: "1", label: "Label: First Name Value: first_name" },
    { id: "2", label: "Label: Last Name Value: last_name" },
    { id: "3", label: "Label: Gender Value: gender" },
    { id: "4", label: "Label: Age Value: age" },
    { id: "5", label: "Label: Account Name Value: account_name" },
    { id: "6", label: "Label: State Value: state" },
  ],
  reducers: {
    removeSchema(state, action) {
      return state.filter((schema) => schema.id !== action.payload);
    },
  },
});
export const { removeSchema } = schemaSlice.actions;
export default schemaSlice.reducer;
