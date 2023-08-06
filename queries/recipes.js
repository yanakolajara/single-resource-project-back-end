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

const createNewRecipe = async(name,photo,type,cuisine,is_healthy,is_vegan,difficulty,ingredient,description,cookingtime) => {
    try {
        const newRecipe = await db.any('INSERT INTO recipes (name,photo,type,cuisine,is_healthy,is_vegan,difficulty,ingredient,description,cookingtime) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *',
        [name,photo,type,cuisine,is_healthy,is_vegan,difficulty,ingredient,description,cookingtime]
        );
        return newRecipe;
    } catch (error) {
        return error;
    }
}

const updateRecipe = async(name,photo,type,cuisine,is_healthy,is_vegan,difficulty,ingredient,description,cookingtime,id) => {
    try {
        const updatedRecipe = await db.any('UPDATE recipes SET name = $1, photo = $2, type = $3, cuisine = $4, is_healthy = $5, is_vegan = $6, difficulty = $7, ingredient = $8, description = $9, cookingtime = $10 WHERE id = $11 RETURNING *',
        [name,photo,type,cuisine,is_healthy,is_vegan,difficulty,ingredient,description,cookingtime,id]
        );
        return updatedRecipe;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    createNewRecipe,
    updateRecipe
}