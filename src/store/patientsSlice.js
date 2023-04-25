import { createSlice } from "@reduxjs/toolkit";
import MOCK_PATIENTS from "../constants/MOCK_PATIENTS.json";
const patientsSlice = createSlice({
  name: "patients",
  initialState: {
    patients: MOCK_PATIENTS,
  },
  reducers: {
    setPatients: (state, action) => {
      state.patients = action.payload;
    },
    addPatient: (state, action) => {
      state.patients.push(action.payload);
    },
  },
});

export const { setPatients, addPatient } = patientsSlice.actions;
export const patientsReducer = patientsSlice.reducer;
