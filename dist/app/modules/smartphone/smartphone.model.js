"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Smartphone = exports.smartphoneSchema = void 0;
const mongoose_1 = require("mongoose");
exports.smartphoneSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, "Price is Required"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is Required"],
    },
    brand: {
        type: String,
        required: [true, "Brand is Required"],
    },
    releaseDate: {
        type: Date,
        required: [true, "ReleaseaDate is Required"],
    },
    camera: {
        type: String,
        required: [true, "Camera is Required"],
    },
    battery: {
        type: String,
        required: [true, "Bettary is Required"],
    },
    model: {
        type: String,
        required: [true, "Model is Required"],
    },
    operatingSystem: {
        type: String,
        required: [true, "OperatingSystem is Required"],
    },
    screenSize: {
        type: String,
        required: [true, "ScreenSize is Required"],
    },
    storageCapacity: {
        type: String,
        required: [true, "StorageCapacity is Required"],
    },
}, { timestamps: true });
// smartphoneSchema.pre("findOneAndUpdate", async function (doc) {
//     console.log(doc)
//     if (this.quantity < doc.quantity) {
//         throw new Error(`in Stock ${this.quantity} available`)
//     }
//     else if (this.quantity === 0) {
//         await Smartphone.findByIdAndDelete(doc.smartphone)
//     }
// });
exports.Smartphone = (0, mongoose_1.model)("Smartphone", exports.smartphoneSchema);
