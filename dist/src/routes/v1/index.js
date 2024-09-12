"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Import routes
router.use("/api/auth", require("./auth"));
module.exports = router;
