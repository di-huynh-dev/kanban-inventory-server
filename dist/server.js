"use strict";
const serverApp = require("./src/app");
const { app: { port }, } = require("./src/config/environment");
const server = serverApp.listen(port, () => {
    console.log("Server started on port " + port);
});
process.on("SIGINT", () => {
    server.close(() => {
        console.log("Server closed");
    });
});
