const mongoose = require('mongoose')
const { Schema } = mongoose

const mixScehma = new Schema({
    code: {
        type: String,
        required: true
    },
    strength: {
        type: Number,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    epd: {
        type: String,
        required: true
    },
    cement: {
        type: Number,
        required: true
    },
    slag: {
        type: Number,
        required: true
    },
    fly_ash: {
        type: Number,
        required: true
    },
    other: {
        type: Number,
        required: true
    },
    cement_replacemant: {
        type: Number,
        required: true
    },
    gwp: {
        type: Number,
        required: true
    },
    supplier: {
        type: String,
        required: true
    }
})

const Mix = mongoose.model('Mix', mixScehma)

module.exports = Mix