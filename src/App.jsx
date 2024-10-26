import React from "react";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchAllAccess from "./components/searchSection/SearchAllAccess";
import JobDisc from "./components/jobsDisc/JobDisc";
import NotFound from "./components/notFoundPage/NotFound";
import { BioProvider } from "./components/ContextAPI";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <SearchAllAccess />,
        },
        {
          path: "/job/:jobId",
          element: <JobDisc />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <BioProvider>
      <RouterProvider router={router} />
    </BioProvider>
  );
}

export default App;
