const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
    CarName: {
        type: "String"
    },
    CompanyName: {
        type: "String"
    },
    FuelCapacity: {
        type: "String"
    },
    CarCapacity: {
        type: "String"
    },
    CarRent: {
        type: "String"
    },
    CarImage: {
        type: "String"
    },
    CarDesc: {
        type: "String"
    }
})

const CarModel = new mongoose.model("carSchema", CarSchema)

module.exports = CarModel;