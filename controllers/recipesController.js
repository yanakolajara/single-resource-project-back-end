const express = require('express');
const router = express.Router();
const { getAllRecipes, getRecipeById } = require('../queries/recipes');

router.get('/', async (req, res) => {
  try {
    const allRecipes = await getAllRecipes();
    if (allRecipes[0]) {
      res.status(200).json(allRecipes);
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipeById = await getRecipeById(req.params.id);
    if (!!recipeById && recipeById.length > 0) {
      res.json(recipeById[0]);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
