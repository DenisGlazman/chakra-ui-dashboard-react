import './App.css';

import Profile from "./Components/Profile screen/Profile.jsx";
import Tables from "./Components/Tables screen/Tables.jsx";
import Dashboard from "./Components/Dashbord screen/Dashbord.jsx";
import SignIn from "./Components/Sign In Screen/SignIn.jsx";
import SignUp from "./Components/Sign Up Screen/SignUp.jsx";
import BillingScreen from "./Components/Billing screen/BillingScreen.jsx";
import Documentation from "./Components/Dashbord screen/SideBar/Downlink/Documentation/Documentation.jsx";
import {Route, Routes} from "react-router-dom";



function App() {

  return (
    <div className="App">
        <Routes>
            <Route path= '/' element={<Dashboard/>}/>
            <Route path='/tables' element={<Tables/>}/>
            <Route path='/billing' element={<BillingScreen/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/documentation' element={<Documentation/>}/>


        </Routes>
    </div>
  );
}

export default App;
