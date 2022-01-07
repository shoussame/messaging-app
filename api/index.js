const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const conversationRoute = require("./src/routes/conversations");
const messageRoute = require("./src/routes/messages");
const authRoute = require("./src/routes/auth");
const userRoute = require("./src/routes/users");
const path = require("path");
const cors = require("cors");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL + process.env.MONGO_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());
app.use(cors());

app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Backend server is running! on port :", process.env.SERVER_PORT);
});
