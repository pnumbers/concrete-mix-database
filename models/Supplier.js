const mongoose = require('mongoose')
const { Schema } = mongoose

const supplierSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mixes: [
        {
            type: String
        }
    ]
})

const Supplier = mongoose.model('Supplier', supplierSchema)