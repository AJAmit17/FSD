require("dotenv").config({ path: __dirname + '/.env' });
const express = require("express");
const connectDB = require("./config/dbConnection");
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

const contactRoutes = require("./routes/contactRouter");

app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
});
