const express = require("express");
const connection = require("./connection");
const loggerRequest = require("./middleware/log");
const userRouter = require("./routes/user");

const app = express();

//connection to db
connection()
  .then((success) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(loggerRequest("log.txt"));

//router
app.use("/api/users", userRouter);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
