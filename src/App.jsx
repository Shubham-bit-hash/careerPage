import React from "react";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import JobForm from "./components/formSection/JobForm";
import SearchAllAccess from "./components/searchSection/SearchAllAccess";
import JobDisc from "./components/jobsDisc/JobDisc";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <SearchAllAccess />
        },
        {
          path: "/job/:jobId",
          element: <JobDisc />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
