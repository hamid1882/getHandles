const app = require("./App");
const connectDatabase = require("./config/database.js");

// handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shuttingdown due to uncaughtException");

  process.exit();
})


require("dotenv").config({ path: "backend/config/config.env" });

connectDatabase();

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
