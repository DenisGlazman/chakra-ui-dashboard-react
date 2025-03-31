import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./Components/Profile screen/Profile.jsx";
import Tables from "./Components/Tables screen/Tables.jsx";
import Dashboard from "./Components/Dashbord screen/Dashbord.jsx";
import SignIn from "./Components/Sign In Screen/SignIn.jsx";
import SignUp from "./Components/Sign Up Screen/SignUp.jsx";
import BillingScreen from "./Components/Billing screen/BillingScreen.jsx";



function App() {

  return (
    <div className="App">
        <Routes>
            <Route path= '/' element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/tables' element={<Tables/>}/>
            <Route path='/billing' element={<BillingScreen/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  );
}

export default App;
