const db = require('../db/dbConfig');

const getAllRecipes = async() => {
    try {
        const fetch = await db.any("SELECT * FROM recipes");
        return fetch;
    } catch (error) {
        return error;
    }
}

const getRecipeById = async(id) => {
    try {
        const fetch = await db.any(`SELECT * FROM recipes WHERE id=$1`,[id]);
        return fetch;
    } catch (error) {
        return error;
    }
}

const createRecipe = async(name,photo,type,is_healthy,is_vegan,difficulty,ingredient,description,cookingtime) => {
    try {
        const fetch = await db.any('INSERT INTO recipes (name, photo, type, cuisine,  is_vegan, difficulty, ingredients, description) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',
        [name,photo,type,is_healthy,is_vegan,difficulty,ingredient,description,cookingtime]
        );
        return fetch;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById
}