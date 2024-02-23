import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";


const AppLayout=()=>{
    return (
        <>   
        <Heading/>
        <Outlet/>
        <Footer/>
        </>

    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
            path:"/About",
            element:<About/>
        },

        {
            path:"/Contact",
            element:<Contact/>
        },
        {
            path:"/restaurant/:id",
            element:<RestaurantMenu/>
        }
    ]
    }

])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

