const mongoose = require("mongoose");

async function connectMongoDb(url) {
    await mongoose.connect(url);
    console.log("MongoDB Connection Successfull");
};

module.exports = connectMongoDb;