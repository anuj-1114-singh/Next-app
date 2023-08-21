import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required!!"]
    },
    password: {
        type: String,
        required: [true, "Email is required!!"]
    },
    about: String,
    profileURL: String

})

export const User = mongoose.models.users || mongoose.model("users", userSchema);