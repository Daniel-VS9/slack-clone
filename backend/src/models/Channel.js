const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ChannelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
});

module.exports = model('Channel', ChannelSchema);
