"use strict";

const mongoose = require("mongoose");
const {
  db: { uri },
} = require("../config/environment");

class Database {
  private static instance: Database;
  constructor() {
    this.connect();
  }

  // connect to DB
  connect() {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(uri)
      .then(() => {
        console.log("Connect to mongodb success!");
      })
      .catch((err: any) => {
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
