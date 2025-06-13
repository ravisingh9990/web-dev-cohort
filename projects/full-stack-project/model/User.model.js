import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: string,
    email: string, 
    password: string,
    role: {
        type: string, 
        enum: ["user", "admin"],
        default: "user"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: string
    },
    resetPasswordToken: {
        type: string
    },
    resetPasswordExpires : {
        type: Date
    }
}, {timestamps: true});

const User = mongoose.model("User", UserSchema)

export default User 