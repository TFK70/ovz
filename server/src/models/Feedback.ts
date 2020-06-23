const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FeedbackSchema = new Schema({
    name: String,
    option: String,
    contacts: String,
    details: String
})

export {
    FeedbackSchema
};