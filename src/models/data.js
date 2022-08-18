const { Schema, model } = require('mongoose');

const DataSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    measures: {
        A1: {
            R: { type: Number },
            G: { type: Number },
            B: { type: Number },
            Hex: { type: Number },
        },
        A2: {
            R: { type: Number },
            G: { type: Number },
            B: { type: Number },
            Hex: { type: Number },
        },
        A3: {
            R: { type: Number },
            G: { type: Number },
            B: { type: Number },
            Hex: { type: Number },
        },
        A4: {
            R: { type: Number },
            G: { type: Number },
            B: { type: Number },
            Hex: { type: Number },
        },
        B1: {
            R: { type: Number },
            G: { type: Number },
            B: { type: Number },
            Hex: { type: Number },
        },
        B2: {
            R: { type: Number },
            G: { type: Number },
            B: { type: Number },
            Hex: { type: Number },
        },
        B3: {
            R: { type: Number },
            G: { type: Number },
            B: { type: Number },
            Hex: { type: Number },
        },
        B4: {
            R: { type: Number },
            G: { type: Number },
            B: { type: Number },
            Hex: { type: Number },
        }
    }
}, { timestamps: true })

module.exports = model('data', DataSchema);