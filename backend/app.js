const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");

const app = express();

app.use(express.json());
app.use(cookieParser());

// Route Imports

const product = require("./routes/productRoutes");
const user = require("./routes/userRouter");
const order = require("./routes/orderRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

app.use(errorMiddleware);
module.exports = app;
