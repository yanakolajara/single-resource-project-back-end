const db = require('../db/dbConfig');

const getAllReviews = async() => {
    try {
        const allReviews = await db.any('SELECT * FROM reviews');
        return allReviews;
    } catch (error) {
        return error;
    }
}

const getReviewsOfRecipe = async(recipeId) => {
    try {
        const recipeReviews = await db.any('SELECT * FROM reviews WHERE recipe_id = $1',[recipeId]);
        return recipeReviews
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllReviews,
    getReviewsOfRecipe
}