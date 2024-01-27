const mongoose = require('mongoose');

const queriesSchema = new mongoose.Schema({
    name:String,
    email: String,
    phone: String,
    query: String,
});

const Queries = mongoose.model("Queries", queriesSchema);

module.exports = Queries;
