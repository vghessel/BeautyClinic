const mongoose = require("mongoose");

const { Schema } = mongoose;

const { serviceSchema } = require("./Service");

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    services: {
        type: [serviceSchema],
    },
},
{ timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;