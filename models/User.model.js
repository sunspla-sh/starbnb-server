const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
 
const userSchema = new Schema({
  email: { 
    type: String, 
    unique: true, 
    required: true 
        },

  password: { 
    type: String, 
    required: true 
            },

  name: { 
    type: String, 
    required: true 
        },

  stays: [ { type: mongoose.Schema.Types.ObjectId, ref: "Stay" }],
  
  reviews: [ { type: mongoose.Schema.Types.ObjectId, ref: "Review"}],

});
 
module.exports = model("User", userSchema);