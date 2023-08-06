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

const createNewRecipe = async(name,photo,type,is_healthy,is_vegan,difficulty,ingredient,description,cookingtime) => {
    try {
        const newRecipe = await db.any('INSERT INTO recipes (name, photo, type, cuisine,  is_vegan, difficulty, ingredients, description) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',
        [name,photo,type,is_healthy,is_vegan,difficulty,ingredient,description,cookingtime]
        );
        return newRecipe;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById
}