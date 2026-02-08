
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Bill from "./pages/bill";
import Estimate from "./pages/estimate";
import Invoice from "./pages/invoice";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/estimate",
    element: <Estimate />,
  },
  {
    path: "/bill",
    element: <Bill />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
