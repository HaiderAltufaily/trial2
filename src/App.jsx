import React from "react";
// import styles from "./style";

import {
  Container,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Patients from "./Pages/Patients";
import PatientDetails from "./Pages/PatientDetails";
import PatientsTable from "./Components/Patients/PatientsTable";
import Main from "./Pages/Main";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Main />} />
        <Route
          path="patients"
          element={
            <Layout>
              <Patients />
            </Layout>
          }
        >
          <Route path=":id" element={<PatientDetails />} />
        </Route>
        <Route path="table" element={<PatientsTable />} />
      </Route>
    )
  );
  return (
    <div dir="rtl">
      {/* First page */}

      <RouterProvider router={router}></RouterProvider>
      {/* <Layout>
        <Patients />
      </Layout> */}
    </div>
  );
}

export default App;
