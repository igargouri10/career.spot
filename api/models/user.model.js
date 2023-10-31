import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: function (value) {
                // At least one uppercase letter
                // At least one special character
                // At least 8 characters in total
                return /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(value);
            },
            message: 'Password must be at least 8 characters with one uppercase letter and one special character.',
        },
        
    },
    img: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    isSeller: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default mongoose.model("User", userSchema);
