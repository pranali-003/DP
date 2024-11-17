// import React from "react";
// import Layout from "../../components/layout/Layout";
// import image1 from "../../../assets/image3.jpeg";
// import './donation-info.css';

// const DonationInfo = () => {
//   return (
//     <Layout>
//       <div className="top">
//         <div className="top-left">
//           <img
//             src={image1}
//             style={{ width: "120px", heigth: "120px" }}
//             alt="not found"
//           />
//         </div>
//         <div className="top-right">
//           <p>
//             Description:Lorem, ipsum dolor sit amet consectetur adipisicing
//             elit. Id, doloribus.
//           </p>
//           <div>
//             <div>Tax Benefit</div>
//             <div>Urgency</div>
//             <div>Category: Grocery</div>
//           </div>
//           <div className="slider">level of completion</div>
//           <p>
//             <span>urgency</span>
//             <span>Days Left</span>Donor Count
//           </p>
//         </div>
//       </div>
//       <div className="bottom">
//         <div className="bottom-left">payment gateway</div>
//         <div className="bottom-right">recent donors</div>
//       </div>
//     </Layout>
//   );
// };

// export default DonationInfo;

import React from "react";
import Layout from "../../components/layout/Layout";
import image1 from "../../../assets/image3.jpeg";
import StripPayement from "react-stripe-checkout"; // Stripe component
import './donation-info.css';

const DonationInfo = () => {
  const handleToken = (token) => {
    console.log(token);
    // Handle the Stripe payment logic here
  };

  const recentDonors = [
    { name: 'John Doe', amount: '$50', date: '2024-11-01' },
    { name: 'Jane Smith', amount: '$30', date: '2024-11-02' },
    { name: 'Michael Brown', amount: '$20', date: '2024-11-03' },
    { name: 'Emily Davis', amount: '$100', date: '2024-11-04' },
  ];

  return (
    <Layout>
      <div className="donation-info-container">
        {/* Top Section */}
        <div className="top">
          <div className="top-left">
            <img
              src={image1}
              alt="NGO"
              className="ngo-image"
            />
          </div>
          <div className="top-right">
            <h2>Donation Details</h2>
            <p className="description">
              Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, doloribus.
            </p>
            <div className="info">
              <div className="info-item">Tax Benefit: Yes</div>
              <div className="info-item">Urgency: High</div>
              <div className="info-item">Category: Grocery</div>
            </div>
            <div className="progress-container">
              <div className="slider">
                <label htmlFor="progress">Level of Completion:</label>
                <input
                  type="range"
                  id="progress"
                  min="0"
                  max="100"
                  value="60"
                  className="slider-input"
                  disabled
                />
                <div className="slider-value">60% Complete</div>
              </div>
            </div>
            <p className="stats">
              <span>Urgency: High</span> | <span>Days Left: 15</span> | <span>Donor Count: 124</span>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom">
          <div className="bottom-left">
            <h3>Make a Donation</h3>
            {/* <StripeCheckout
              name="Charity Donation"
              description="Donate to the cause"
              amount={5000} // Amount in cents (e.g., $50.00)
              token={handleToken}
              stripeKey="your-public-key-here"
              currency="USD"
            >
              <button className="donate-btn">Donate with Stripe</button>
            </StripeCheckout> */}
          </div>

          <div className="bottom-right">
            <h3>Recent Donors</h3>
            <ul className="donor-list">
              {recentDonors.map((donor, index) => (
                <li key={index} className="donor-item">
                  <span className="donor-name">{donor.name}</span>
                  <span className="donor-amount">{donor.amount}</span>
                  <span className="donor-date">{donor.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonationInfo;
