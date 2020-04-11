import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Recipe = mongoose.model("Recipe", RecipeSchema);

export default Recipe;