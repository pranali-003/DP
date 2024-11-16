import React from "react";
import Layout from "../../components/layout/Layout";
import image1 from "../../../assets/image3.jpeg";
import './donation-info.css';

const DonationInfo = () => {
  return (
    <Layout>
      <div className="top">
        <div className="top-left">
          <img
            src={image1}
            style={{ width: "120px", heigth: "120px" }}
            alt="not found"
          />
        </div>
        <div className="top-right">
          <p>
            Description:Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Id, doloribus.
          </p>
          <div>
            <div>Tax Benefit</div>
            <div>Urgency</div>
            <div>Category: Grocery</div>
          </div>
          <div className="slider">level of completion</div>
          <p>
            <span>urgency</span>
            <span>Days Left</span>Donor Count
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">payment gateway</div>
        <div className="bottom-right">recent donors</div>
      </div>
    </Layout>
  );
};

export default DonationInfo;
