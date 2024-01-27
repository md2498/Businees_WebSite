const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    linkText: String,
    link: String
});

const Services = mongoose.model("Services", servicesSchema);

module.exports = Services;
