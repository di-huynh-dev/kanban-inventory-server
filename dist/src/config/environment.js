"use strict";
const development = {
    app: {
        port: process.env.APP_PORT || 3000,
    },
    db: {
        uri: process.env.MONGODB_URI,
    },
};
const production = {
    app: {
        port: process.env.PRO_APP_PORT || 3050,
    },
    db: {
        uri: process.env.MONGODB_URI,
    },
};
const config = {
    development,
    production,
};
const env = process.env.NODE_ENV === "production" ? "production" : "development";
module.exports = config[env];
