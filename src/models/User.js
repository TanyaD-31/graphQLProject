import mongoose from "mongoose";
import Recipe from "./Recipe";
 
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
    },
    recipes: {
        type: [Recipe.schema]
    }
})

const User = mongoose.model("User", UserSchema);

export default User;