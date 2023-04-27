import { configureStore } from "@reduxjs/toolkit";
import { patientsReducer } from "./slices/patientsSlice";

const store = configureStore({
  reducer: {
    patients: patientsReducer,
  },
});

export default store;
