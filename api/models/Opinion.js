const mongoose = require("mongoose");

const opinionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    party: { type: String, required: true },
    description: { type: String, required: true }
});

const Opinion = mongoose.model("Opinion", opinionSchema);
module.exports = Opinion;
