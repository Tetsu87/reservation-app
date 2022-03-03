const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productScheme = new Schema({
    //  author: ObjectId,
    coverImage: String,
    name: { type: String, required: true, max: [60, "Maximum input is 60 characters"] },
    price: Number,
    description: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headingText1: String,
    headingText2: String,
    headingText3: String,
});

module.exports = mongoose.model("Product", productScheme);