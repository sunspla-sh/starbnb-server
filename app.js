// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");


const { isAuthenticated } = require("./middleware/jwt.middleware.js"); 
// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js

const authRouter = require("./routes/auth.routes.js");          //  <== IMPORT
app.use("/auth", authRouter);   

const planetRouter = require("./routes/planet.routes");          //  <== planets
app.use("/api", planetRouter);

const stayRouter = require("./routes/stays.routes");
app.use("/api", isAuthenticated, stayRouter);                   // StayRoute

const allRoutes = require("./routes/index.routes");
app.use("/api", isAuthenticated, allRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
