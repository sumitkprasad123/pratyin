
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Login from "./page/login/Login"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import Student from "./page/dashboard/student dashboard/Student";
import Admin from "./page/dashboard/admin dashboard/Admin";
import Teacher from "./page/dashboard/teacher dashboard/Teacher";

function App() {
  const Layout = () => {
    return (
      <div>
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
  ]);

  return <RouterProvider router={router} />
}

export default App
