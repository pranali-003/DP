import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./editProfile.css";
import image1 from '../../../assets/image2.jpeg'
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import {Link} from "react-router-dom"
import Layout from '../../components/layout/Layout'

const EditProfile = () => {
  return (
    <Layout>
      {/* <Navbar /> */}
      <div className="profile-section">
      <h2 className="profile-heading">My Profile</h2>
        <div className="my-profile">
          <div className="profile-left">
            <div>
            <img src={image1} className="ngo-image"alt="not found " />
            </div>
            <div className="profile-info">
            <p>Pritesh Patel</p>
            <p>pritesh112@gmail.com</p>
            <p>+91 9977886655</p>
            <button className="edit-btn" ><Link to="edit_donor_profile">Edit</Link></button>
            </div>
           
          </div>
          <div className="profile-right">
            <div className="donations">
            <FaHandHoldingHeart size={55} />
              <p>$200</p>
              <p>Total Donations</p>

            </div>
            <div className="campaigns">
            <RiCommunityFill size={55}  />
          <p>20</p>
          <p>Total Campaigns</p>
            </div>
          </div>
        </div>
        <h2 className="history-heading">Donation History</h2>
        <div className="donation-history">
          
          <div className="donation-info">
            <p>NGO Name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sequi alias sint exercitationem, iure nesciunt!</p>
            <p>23/09/2024</p>
            <button>View</button>
          </div>
          <div className="donation-info">
            <p>NGO Name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, voluptatibus.</p>
            <p>23/09/2024</p>
            <button>View</button>
          </div>
          <div className="donation-info">
            <p>NGO Name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, voluptatibus.</p>
            <p>23/09/2024</p>
            <button>View</button>
          </div>
          <div className="donation-info">
            <p>NGO Name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, voluptatibus.</p>
            <p>23/09/2024</p>
            <button>View</button>
          </div>
          <div className="donation-info">
            <p>NGO Name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, voluptatibus.</p>
            <p>23/09/2024</p>
            <button>View</button>
          </div>
        </div>
      </div>
      
    </Layout>
  );
};

export default EditProfile;
