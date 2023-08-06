const express = require('express')
const router = express.Router()

const {
    getAllRecipes,
    getRecipeById,
    createNewRecipe
} = require('../queries/recipes')

router.get('/', async(req,res) => {
    try {
        const allRecipes = await getAllRecipes();
        if(allRecipes[0]){
            res.send(allRecipes);
        }else{
            res.status(500).json({error: "Server error"});
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
})

router.get('/:id', async(req,res) => {
    try {
        const recipeById = await getRecipeById(req.params.id);
        if(!!recipeById && recipeById.length > 0){
            res.json(recipeById[0]);
        }else{
            res.status(404).json({error: "Not found"});
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
})

router.post('/', async(req,res) => {
    const recipeObject = req.body;
    try {
        const newRecipe = await createNewRecipe(recipeObject.name, recipeObject.photo, recipeObject.type, recipeObject.cuisine, recipeObject.is_healthy, recipeObject.is_vegan, recipeObject.difficulty, recipeObject.ingredient, recipeObject.description, recipeObject.cookingtime);
        res.json(newRecipe)
    } catch (error) {
        res.status(500).json({error: error});
    }
})

module.exports = router;