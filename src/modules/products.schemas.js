import mongoose from "mongoose";

const userCollection = 'products'

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 100
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        max: 500
    },
    code: {
        type: String,
        required: true,
        max: 6,
        unique: true
    },
    image: {
        type: String,
        max: 200
    },
    stock: {
        type: Number,
        required: true,
        max: 5000
    }
})

export const productsModels = mongoose.model(userCollection, productsSchema)
