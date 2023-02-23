const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    user: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Message', dataSchema)