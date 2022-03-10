const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    content: { type: String, required: true },
    username: { type: String, required: true },
}, {
    timestamps: true,
});

const Comment = mongoose.model('Comment', exerciseSchema);

module.exports = Comment;