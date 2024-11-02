// import React from 'react'
// import './profile.css'
// import Navbar from '../../components/navbar/Navbar'

// const Profile = () => {
//   return (
//     <div className="profile-section">
//       <Navbar/>
//     </div>
//   )
// }

// export default Profile
// ProfilePage.js
import React from 'react';
import './profile.css'
import Layout from '../../components/layout/Layout';
import Main from '../../components/main/Main'
import Hero from '../../components/hero/Hero'; // Your HeroSection component
import About from '../../components/about/About'
import RecentDonors from '../../components/recent-donors/RecentDonors'


const Profile = () => {
  return (
    <Layout>
      <Main/>
      <Hero /> 
      <About/>
      <RecentDonors/>
    </Layout>
  );
};

export default Profile;
