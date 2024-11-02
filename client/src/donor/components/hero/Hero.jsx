import React from "react";
import "./hero.css";
import Card from "../card/Card";
import data from "./data.json";
import About from '../about/About'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">  
        <h1 className="hero-heading">"Small Gifts, Big Impacts!"</h1>{" "}
        <p>
          Your contribution, no matter how small, can create a ripple effect of
          positive change in the lives of those in need. Every donation helps us
          support various initiatives aimed at uplifting communities and
          providing essential resources.
        </p>
        {/* <p>Join us in making a difference! Your generosity can empower individuals, support education, improve health, and foster sustainable development. Together, we can create a brighter future for those who rely on our support.</p> <p>By choosing to give, you're not just making a donation; you're becoming a part of a larger mission to transform lives. Let's work hand in hand to build a world where everyone has the opportunity to thrive!</p> */}
      </div>
      
      <div className="money-donation-heading">
        <h3>Here are some Ngo that require Monetary Funds</h3>
       </div>
      <div className="money-donation">
        {data.map((ngo) => (
          <Card
            key={ngo.id}
            image={ngo.image}
            title={ngo.ngoName}
            subtitle={ngo.description}
            additionalInfo={ngo.additionalInfo}
          />
        ))}
      </div>
      <div  className="item-donation-heading">
          <h3>Here are some Ngo that require Other Donations</h3>
          
            <select className="item-category" name="item-category" id="">
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="medicines">Medicines</option>
            <option value="stationary">Stationary</option>
            </select>
          
      </div>
      <h3>Clothes</h3>
      <div className="item-donation">
        {data.map((ngo,key) => (
          <Card
            key={ngo.id}
            image={ngo.image}
            title={ngo.ngoName}
            subtitle={ngo.description}
            additionalInfo={ngo.additionalInfo}
          />
        ))}
      </div>
      <h3>Grocery</h3>
      <div className="item-donation">
        {data.map((ngo,key) => (
          <Card
            key={ngo.id}
            image={ngo.image}
            title={ngo.ngoName}
            subtitle={ngo.description}
            additionalInfo={ngo.additionalInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
