const express = require('express')
const router = express.router()

const {
    getAllRecipes,
    getRecipeById
} = require('../queries/recipes')