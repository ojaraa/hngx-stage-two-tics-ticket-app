import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";


const AppRoutes = () => {
    const router = createBrowserRouter([
        { 
         path: '',
         element: <Home/>,
         }
     ])
     return <RouterProvider router={router} />;
}

export default AppRoutes