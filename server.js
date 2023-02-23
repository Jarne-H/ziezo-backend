const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { initiateRouter } = require("./src/api/routes");

const app = express();
const port = 3000;

if (process.env.NODE_ENV == "production") {
    console.log("%cProduction environment detected", "color: green");
}
else {
    require("dotenv").config();
    console.log("%cDevelopment environment detected", "color: green");
}
if (!process.env.MONGO_URI) {
    console.error("ERROR: MONGO_URI not set");
}

// Set up mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'));
database.once('connected', () => {
    console.log("%cConnected to the database", "color: green");
});

// Set up express
app.use(cors());
app.use(express.json());

initiateRouter(app);

// Start the server
app.listen(port, () =>
    console.log(`NodeJS Demo is listening on 127.0.0.1:${port}`)
);
