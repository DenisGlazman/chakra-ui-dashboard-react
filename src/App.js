import './App.css';
import {Route, Routes} from "react-router-dom";

import Profile from "./Components/Profile screen/Profile";
import Tables from "./Components/Tables screen/Tables";
import Dashboard from "./Components/Dashbord screen/Dashbord";
import SignIn from "./Components/Sign In Screen/SignIn";
import SignUp from "./Components/Sign Up Screen/SignUp";



function App() {

  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/tables' element={<Tables/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  );
}

export default App;
