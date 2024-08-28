const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: { required : true ,message: 'Email already exists' }
        },
        password: {
            type: String,
            required: true
        },
    }, { timestamps: true });

module.exports = model('user', userSchema);