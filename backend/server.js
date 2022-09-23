require("dotenv").config();
const authRoutes = require("./routes/auth");
const cors = require("cors");
const express = require("express");
const tasks = require("./routes/tasks");
const userRoutes = require("./routes/users");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require('body-parser');



// middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tasks", tasks);

app.use((req, res) => {
    throw new HttpError('This route does not exist!', 404);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json({
      message: error.message || 'An unknown error occurred!',
    });
  });

//DB connection
const uri =
  ''; //MongoDB URL for database connection goes here
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: '1',
  })
  .then(() => {
    app.listen(5000);
    console.log('mongodb connection established...');
    console.log('server started @ http://localhost:5000/');
  })
  .catch((err) => {
    console.log('mongodb connection failed!');
    console.log(err);
  });





