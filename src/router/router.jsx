import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import InvoiceDetails from "../components/InvoiceDetails/InvoiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "faturalarim/:index",
                element: <InvoiceDetails />
            }
        ]
    },

]);

export default router;