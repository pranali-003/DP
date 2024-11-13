import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './donor/pages/register/Register'
import Login from './donor/pages/login/Login'
import Profile from './donor/pages/profile/Profile'
import FindNgo from './donor/pages/FindNgo/FindNgo'
import EditProfile from './donor/pages/editProfile/EditProfile'
import EditProfileBox from './donor/components/editProfileBox/EditProfileBox';
const App = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/donor_register" element={<Register/>}></Route>
            <Route path="/donor_login" element={<Login/>}></Route>
            <Route path="/donor_profile" element={<Profile/>}></Route>
            <Route path="/ngo_details" element={<FindNgo/>}></Route>
            <Route path="/edit_profile" element={<EditProfile/>}></Route>
            <Route path="edit_profile/edit_donor_profile" element={<EditProfileBox/>}></Route>


        </Routes>
    </Router>
    </>
  )
}

export default App
