import { createSlice } from "@reduxjs/toolkit";
import MOCK_PATIENTS from "../../constants/MOCK_PATIENTS.json";
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
    deletePatient: (state, action) => {
      state.patients = state.patients.filter((p) => +p.id !== +action.payload);
    },
    editPatient: (state, action) => {
      const editedPatientIndex = state.patients.findIndex(
        (p) => +p.id === +action.payload.id
      );
      state.patients[editedPatientIndex] = action.payload;
    },
    filterPatients: (state, action) => {},
  },
});

export const { setPatients, addPatient, deletePatient, editPatient } =
  patientsSlice.actions;
export const patientsReducer = patientsSlice.reducer;
