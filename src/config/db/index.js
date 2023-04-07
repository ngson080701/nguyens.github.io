const mongoose = require('mongoose');
async function connect() {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect('mongodb://127.0.0.1/son_productdemo');
        console.log('connect success');
    } catch (error) {
        console.log('faillll');
    }
}

module.exports = { connect };
