const mongoose = require("mongoose")

async function main() {

    try {
        await mongoose.connect("mongodb+srv://vgerlachhessel:47877808@cluster0.snkxdff.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Connected to Database")
    } catch (error) {
        console.log(`Error: ${error}`)
    };

};

module.exports = main
