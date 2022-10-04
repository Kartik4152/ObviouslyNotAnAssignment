import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages";
import CreatePage from "./pages/create";
import EventPage  from "./pages/event";

import './styles/global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
  {
    path: "/event",
    element: <EventPage />,
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
