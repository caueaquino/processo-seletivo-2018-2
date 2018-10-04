const mongoose = require("mongoose");

var Schema = require('mongoose').Schema;

const EventsSchema = mongoose.Schema({
    dateOfEvent: {
        type: Number,
        required: true
    },
    typeOfEvent: {
        type: String,
        required: true
    },
    descriptionOfEvent: {
        type: String,
        required: true
    },
});
/*
const UserSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});
*/

const events = module.exports = mongoose.model('events', EventsSchema);