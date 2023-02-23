const express = require('express');
const dotenv = require('dotenv').config();
const colors = require("colors");
const moragan = require("morgan");
const connectDB = require("./config/db");
const cors = require("cors");

const port = 5000 || process.env.PORT;


//mongodb connection
connectDB();
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(moragan("dev"));
app.use(cors());
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/doctor", require("./routes/doctorRoutes"));


app.listen(port, () => {
  // console.log(
  //   `Server Running in ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`
  //     .bgCyan.white
  // );
});
