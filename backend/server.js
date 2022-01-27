const app = require("./App");
const connectDatabase = require("./config/database.js");

require("dotenv").config({ path: "backend/config/config.env" });

connectDatabase();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
