const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    imageUrl:String,
    isActive:String
});

const Slider = mongoose.model("Slider", sliderSchema); 

module.exports = Slider;
