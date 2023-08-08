const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const recipes = require('./controllers/recipesController')
const reviews = require('./controllers/reviewsController')


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/recipes', recipes)
app.use('/reviews', reviews)
recipes.use('/:recipeId/reviews', reviews)


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('*', (req,res) => {
  res.status(404).send('Not found')
})

module.exports = app;
