import { Mongoose } from "mongoose";

const mongoose = require('mongoose');
const config = require('config');

async function db_connect() {
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            uesCreateIndex: true
        });
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
}

const db: Mongoose = mongoose.connection;

export {
    db_connect,
    db
}