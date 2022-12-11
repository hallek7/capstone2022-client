import React, { useContext } from 'react'
import Navbar from "./components/navbar/Navbar";
import Homepage from './pages/homepage/Homepage';
import Indvpost from './pages/invdpost/Indvpost'; 
import Write from './pages/write/Write';
import ProfileSetting from './pages/profileSetting/ProfileSetting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import { Context } from './userverif/Context';

// use context api to check if a user exists in the db on 
//login we'll use the user info on every page the user may try to access in 
// order to prevent a user that does not have an account from acess the
// the diffrent componets like login, write ad, settings page etc , anytime 
// a use changes 
function App() {
  //test user to test after login
  const {user} = useContext(Context);
return (
<Router>
<Navbar/>
<Routes> 
<Route excat path='/' element={<Homepage/>}/> 
<Route path='/register' element={user? <Homepage/>:<Register/>}/> 
<Route path='/login' element={user? <Homepage/>: <Login/>}/> 
<Route path='/write' element={user?<Write/> :<Register/>}/> 
<Route path='/profileSetting' element={user? <ProfileSetting/>: <Register/>}/> 

<Route path='/adv/:advId' element={<Indvpost/>}/> 


</Routes>
  </Router>

)
}

export default App;