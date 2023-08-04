const db = require('../db/dbConfig');

const getAllRecipes = async() => {
    try {
        const fetch = db.any("SELECT * FROM recipes");
        return fetch;
    } catch (error) {
        return error;
    }
}

const getRecipeById = async(id) => {
    try {
        const fetch = db.any(`SELECT * FROM recipes WHERE id=$1`,[id]);
        return fetch;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById
}