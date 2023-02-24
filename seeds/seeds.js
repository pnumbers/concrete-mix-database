const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')

try {
    mongoose.connect('mongodb://localhost:27017/concreteMix');
} catch (err) {
    console.log('Not Connected to Database');
}