const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser)

// Route Imports

const product = require("./routes/productRoutes");
const user = require("./routes/userRouter");

app.use("/api/v1", product);
app.use("/api/v1", user);

module.exports = app;
