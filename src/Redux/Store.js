import { configureStore } from "@reduxjs/toolkit";
import schemaReducer from "./Segment";
const store = configureStore({
  reducer: {
    schema: schemaReducer,
  },
});
export default store;
