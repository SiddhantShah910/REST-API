const express = require("express");
const { logReqRes } = require("./middlewares/index"); 
const connectMongoDb = require("./connection");
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

// Connection
connectMongoDb("mongodb://localhost:27017/youtube-app-1");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt")); 

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("Server Started"));
