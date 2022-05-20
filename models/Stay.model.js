const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const staySchema = new Schema(
{ 
    planet: { type: mongoose.Schema.Types.ObjectId, ref: "Planet"},
    guest: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    startDate: Date,
    endDate: Date,
    totalPrice: Number,
})


const Stay = model('Stay', staySchema);

module.exports = Stay;