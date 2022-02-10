const app = require("./App");
const connectDatabase = require("./config/database.js");
const cloudinary = require("cloudinary").v2;

// handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shuttingdown due to uncaughtException");

  process.exit();
});

require("dotenv").config({ path: "backend/config/config.env" });

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

// unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unahandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
