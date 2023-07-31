const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require("dotenv").config();


// import router
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const questionRoutes = require("./routes/question");
const quizRoutes = require("./routes/quiz");
const completedTestRoutes = require("./routes/completed_test");
const studyMaterialsRoutes = require("./routes/study_materials");
const contactUsRoutes = require("./routes/contactus");

//app
const app = express();

//db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.log(err));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());


//router middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/completedTest", completedTestRoutes);
app.use("/api/studyMaterials", studyMaterialsRoutes);
app.use("/api/contactUs", contactUsRoutes);



const port = process.env.PORT || 8000;

app.listen(port, () => console.log("server started"));
