import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");

const StripePayment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);

    // Make a request to your backend to create a checkout session
    const response = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            name: "Donation to NGO",
            amount: 50, // Donation amount in dollars
            quantity: 1,
          },
        ],
      }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error("Error redirecting to checkout:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h3>Donate Now</h3>
      <button
        onClick={handleCheckout}
        className="stripe-button"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Pay with Stripe"}
      </button>
    </div>
  );
};

export default StripePayment;
