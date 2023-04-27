import React from "react";

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
import Initialization from "./Pages/Initialization";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Initialization />} />
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
      </Route>
    )
  );
  return (
    <div dir="rtl">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
