import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Bio: {
        type: String,
        default: '',
    },
    occupation: {
        type: String,
        default: '',
    },
    profilePicture: {
        type: String,
        default: '',
    },
    instagram: {
        type: String,
        default: '',
    },
    twitter: {
        type: String,
        default: '',
    },
    linkedin: {
        type: String,
        default: '',
    },
    github: {
        type: String,
        default: '',
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
