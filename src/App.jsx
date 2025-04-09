import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import SingleProduct from './pages/SingleProduct'
import Layout from './components/Layout'
import { ToastContainer } from 'react-toastify';

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             {
//                 path: "products",
//                 element: <Products />
//             },
//         ]
//     },
//     {
//         path: "products",
//         element: <>
//             <Navbar />
//             <Products />
//         </>,
//     },
//     {
//         path: "products/:id",
//         element: <>
//             <Navbar />
//             <SingleProduct />
//         </>,
//     },
//     {
//         path: "services",
//         element: <>
//             <Navbar />
//             <Services />
//         </>,
//     },
//     {
//         path: "dashboard",
//         element: <Dashboard />,
//         children: [
//             {
//                 index: true,
//                 element: <Profile />
//             },
//             {
//                 path: "settings",
//                 element: <Settings />
//             },
//         ]
//     },
//     {
//         path: "*",
//         element: <NotFound />
//     }
// ])

const App = () => {
    return <>
        {/* <ToastContainer position='bottom' /> */}
        {/* <RouterProvider router={router} /> */}
        <Home />
    </>

}

export default App