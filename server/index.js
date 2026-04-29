// Server side code
const express = require ('express');
const app =  express();
const bodyParser = require('body-parser');
const cors =require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const PaymentRouter = require('./Routes/PaymentRouter');
const PickupRouter = require('./Routes/PickupRouter');
const volunteeringRouter = require('./Routes/VolunteeringRouter');
const status = require("./Routes/VolunteeringRouter");
const ngoRouter = require("./Routes/NgoRouter");
const donationRouter = require("./Routes/DonationRouter");

require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080;

app.get('/ping', (req,res) => {
    res.send("PONG");
    console.log('client has been reached the site')
})

app.use(bodyParser.json());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/api', PaymentRouter);
app.use('/api', PickupRouter);
app.use('/api',status);
app.use('/api/auth', AuthRouter);
app.use('/api/volunteering', volunteeringRouter);
app.use("/api", ngoRouter);
app.use("/api", donationRouter);


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on ${PORT}`)
})