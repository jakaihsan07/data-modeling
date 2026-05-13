const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const demoRoutes = require("./routes/demo.route");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api", demoRoutes);

app.get("/", (req, res) => {
  res.send("Data Modeling Demo API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});