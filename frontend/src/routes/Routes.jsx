import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import App from "../App";
import AddProduct from "../pages/AddCar";
import Layout from "../layout/Layout";
import EditCarDetails from "../pages/EditCarDetails";
import Login from "../pages/Login";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Logout from "../pages/Logout";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-car",
        element: (
          <PrivateRoutes>
          <Layout>
            <AddProduct />
          </Layout>
          </PrivateRoutes>
        ),
      },
      {
        path: "/edit-car/:id",
        element: (
          <PrivateRoutes>
          <Layout>
            <EditCarDetails />
          </Layout>
          </PrivateRoutes>
        ),
      },
      {
        path: "/logout",
        element: <PrivateRoutes>
          <Logout/>
        </PrivateRoutes>
      }
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default Routing;
