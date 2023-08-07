const db = require('../db/dbConfig');

const getAllRecipes = async() => {
    try {
        const allRecipes = await db.any("SELECT * FROM recipes");
        return allRecipes;
    } catch (error) {
        return error;
    }
}

const getRecipeById = async(id) => {
    try {
        const recipeById = await db.any(`SELECT * FROM recipes WHERE id=$1`,[id]);
        return recipeById;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
}