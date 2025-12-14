require("dotenv").config({ path: __dirname + '/.env' });
const express = require("express");
const contactRoutes = require("./routes/contactRouter");

const connectDB = require("./config/dbConnection");
connectDB();

const app = express();
app.use("/api/contacts", contactRoutes);
app.use(express.json());

app.listen(3000, () => {
  console.log(`SERVER IS RUNNING AT PORT 3000`);
});
