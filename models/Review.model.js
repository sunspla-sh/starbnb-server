const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
{ 
    planet: { type: mongoose.Schema.Types.ObjectId, ref: "Planet" },
    guest: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    stay: { type: mongoose.Schema.Types.ObjectId, ref: "Stay" },
    content: String,
})


const Review = model('Review', reviewSchema);

module.exports = Review;