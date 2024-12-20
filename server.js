require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;
mongoose.set("strictQuery", false);

// const url = "mongodb://127.0.0.1:27017/schoolapp";
const url = process.env.MONGO_URI;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(() => {
    console.log("Error in MongoDB connection");
  });

app.use(
  cors({
    origin: "https://school-management-system12.netlify.app", // Your frontend URL
  })
);
app.use(bodyParser.json());

const classRoute = require("./routes/classRoute");
const parentsRoute = require("./routes/parentsRoute");
const studentRoute = require("./routes/studentsRoute");
const teacherRoute = require("./routes/teachersRoute");
const attendanceRoute = require("./routes/attendanceRoute");

app.use("/classRoute", classRoute);
app.use("/parents", parentsRoute);
app.use("/students", studentRoute);
app.use("/teachers", teacherRoute);
app.use("/attendance", attendanceRoute);

app.listen(port, () => {
  console.log(`app is running on port ${port} `);
});
