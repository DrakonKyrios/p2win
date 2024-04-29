import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/Error/404.page";
import { RoadMapPage } from "./pages/RoadMap/RoadMap.page";
import DefaultShell from "./pages/DefaultShell.component";
import LandingPage from "./pages/Landing/Landing.page";
import Terms from "./pages/Legal/Terms.page";
import PrivacyPolicy from "./pages/Legal/Privacy.page";
import Games from "./pages/Games/games.page";
import Metrics from "./pages/Metrics/Metrics.page";

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
          path: "/games",
          element: <Games />,
        },
        {
          path: "/metrics",
          element: <Metrics />,
        },
        {
          path: "/legal",
          children: [
            {
              path: "terms",
              element: <Terms />,
            },
            {
              path: "privacy-policy",
              element: <PrivacyPolicy />,
            },
          ],
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
