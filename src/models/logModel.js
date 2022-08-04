const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    orderDate: { type: Date },
    region: { type: String },
    rep: { type: String },
    item: { type: String },
    units: { type: Number },
    unitCost: { type: Number },
    total: { type: Number },
});

exports.logModel = new mongoose.model("log", logSchema);
