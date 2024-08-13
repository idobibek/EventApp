const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./src/Config/db");

const authRoutes=require("./src/routes/authRoutes");
const eventRoutes=require("./src/routes/eventRoutes");
const vendorRoutes=require("./src/routes/vendorRoutes");
app.use(express.json());
app.use(cors())
const port=process.env.port;
connectDB();
app.use('/api/auth',authRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/vendors',vendorRoutes);


app.listen(port,()=>{
    console.log(`server is running in ${port}`);
});