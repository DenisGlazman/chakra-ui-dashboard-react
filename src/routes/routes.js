import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../Components/Dashbord screen/Dashbord";
import Tables from "../Components/Tables screen/Tables";
import Profile from "../Components/Profile screen/Profile";
import SignIn from "../Components/Sign In Screen/SignIn";
import SignUp from "../Components/Sign Up Screen/SignUp.jsx";
import BillingScreen from "../Components/Billing screen/BillingScreen";
import Documentation from "../Components/Dashbord screen/SideBar/Downlink/Documentation/Documentation.jsx";
const router = createBrowserRouter(
    [
        {
            path: "",
            element: <Dashbord />,
        },
        {
            path: "/billing",
            element: <BillingScreen />
        },
        {
            path: "/tables",
            element: <Tables />
        },
        {
            path: "/profile",
            element: <Profile />
        },
        {
            path: "/signin",
            element: <SignIn />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/documentation",
            element: <Documentation />
        }
    ]

);

export default router;