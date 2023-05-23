const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 50000 },
    image: { type: String, maxLength: 500000 },
    slug: { type: String, maxLength: 500 },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    nameDevice: { type: String, maxLength: 255 },
    rwVideo: { type: String, maxLength: 255 },
    price: { type : Number, maxLength: 255}
});


module.exports = mongoose.model('Course', Course);
