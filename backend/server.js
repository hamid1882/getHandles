const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("./config/database");

//Config

dotenv.config({path:"backend/config/config.env"})

//Connection to connectDatabase

connectDatabase();


app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
})