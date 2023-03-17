require("dotenv").config();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

const express = require("express");
const mongoose = require("mongoose");

const usersRouter = require("./routes/users");

// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/users", usersRouter);

// Connect to db
mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
      console.log(`Listening on localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
