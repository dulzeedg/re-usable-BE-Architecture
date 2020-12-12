const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        product_type: {
            type: Object,
            required: true
        },
        product_name: {
            type: String,
            required: true
        },
        product_price: {
            type: Number,
            required: true
        },
        product_size: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const UserSchema = new Schema(
    {
        userID: {
            type: String,
            required: true
        },
        user_transaction: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Product", ProductSchema);
module.exports = mongoose.model("User", UserSchema);