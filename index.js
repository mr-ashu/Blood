require("dotenv").config();

const express = require("express");
const cors = require("cors");
const reciverRouter = require("./auth.route");
const donorRouter = require("./donor.route");
 
const connect = require("./config")
const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.use(cors());
 
app.use("/reciver", reciverRouter);
app.use("/donor", donorRouter);
 

app.listen(PORT, async () => {
    await connect();
    console.log(`listning to http://localhost:${PORT}`)
})