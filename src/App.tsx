import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/Error/404.page";
import { RoadMapPage } from "./pages/RoadMap/RoadMap.page";
import DefaultShell from "./pages/DefaultShell.component";
import LandingPage from "./pages/Landing/Landing.page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultShell />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/roadmap",
          element: <RoadMapPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
