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

const createReview = async (review) => {
    try {
       const newReview = await db.one(
        `INSERT INTO reviews (recipe_id, reviewer, title, content, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [
            review.recipe_id,
            review.reviewer,
            review.title,
            review.content,
            review.rating,
        ]
       );
       return newReview; 
    } catch (error) {
        return error
    }
}

const deleteReviewById = async (id) => {
    try {
        const deleteReview = await db.any(
            `DELETE FROM reviews WHERE id = $1 returning *`, 
            id
        );
        return deleteReview
    } catch (error) {
        return error
    }
}
module.exports = {
    getAllReviews,
    getReviewsOfRecipe,
    createReview,
    deleteReviewById
}