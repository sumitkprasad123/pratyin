
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Login from "./page/login/Login"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import Student from "./page/dashboard/student dashboard/Student";
import Admin from "./page/dashboard/admin dashboard/Admin";
import Teacher from "./page/dashboard/teacher dashboard/Teacher";
import Register from "./page/register/Register";

function App() {
  const Layout = () => {
    return (
      <div className="app_container">
        <Navbar/>
        <div className="app">
            <Sidebar/>
            <Outlet/>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      children: [
        {
          path: "/",
          element: <Student />,
        },
        {
          path: "/Student Dashboard",
          element: <Student />,
        },
        {
          path: "/Admin Dashboard",
          element: <Admin />,
        },
        {
          path: "/Teacher Dashboard",
          element: <Teacher />,
        },
        {
          path: "*",
          element: <Student />,
        },
        
      ]
    },
    {
      path: "/login",
      element: <Login />,
    }, 
    {
      path: "/register",
      element: <Register/>,
    }, 
  ]);

  return <RouterProvider router={router} />
}

export default App
