const express = require("express");

require("dotenv").config();
const app = express();

// middlewares

//init db
require("./config/mongodb");

// routes

module.exports = app;
