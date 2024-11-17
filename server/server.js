
require('dotenv').config();
const express  = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const stripe = require("stripe")("YOUR_STRIPE_SECRET_KEY");

app.use(cors());
const PORT = process.env.PORT || 5000;
// importing model from models folder to create a new ngo entry on post method.
const NgoInfo = require('./models/ngo.info')
// to allow data to not be undefined
app.use(express.json());



// middleware
app.use(express.urlencoded({extended:false}));
app.use('/api/ngo', require('./routes/ngoRoutes'));
app.use('/api/donor', require('./routes/donorRoutes'));


app.listen(PORT,()=>{
    console.log('hello world');
})

app.get('/', (req,res)=>{
    res.send('hello from node api!')
})




app.post("/create-checkout-session", async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: req.body.items.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.amount * 100, // amount in cents
          },
          quantity: item.quantity,
        })),
        mode: "payment",
        success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).send("Internal Server Error");
    }
  });

connectDB();


