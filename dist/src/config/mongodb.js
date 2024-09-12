"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { db: { uri }, } = require("../config/environment");
class Database {
    constructor() {
        this.connect();
    }
    // connect to DB
    connect() {
        if (1 === 1) {
            mongoose_1.default.set("debug", true);
            mongoose_1.default.set("debug", { color: true });
        }
        mongoose_1.default
            .connect(uri)
            .then(() => {
            console.log("Connect to mongodb success!");
        })
            .catch((err) => {
            console.log(err);
        });
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;
