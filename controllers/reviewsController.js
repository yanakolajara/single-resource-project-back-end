const express = require('express')
const router = express.Router({mergeParams: true})

const {
    getAllReviews,
    getReviewsOfRecipe,
    createReview,
} = require('../queries/reviews')



router.get('/', async(req,res) => {
    try {
        const allReviews = await getAllReviews()
        if(allReviews[0]){
            res.json(allReviews)
        }else{
            res.status(500).json({error: 'Server error'})
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/get-reviews', async(req,res) => {
    try {
        const recipeReviews = await getReviewsOfRecipe(req.params.recipeId);
        if(recipeReviews[0]){
            res.json(recipeReviews)
        }else{
            res.status(500).json({error: 'Reviews not found'})
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
})
router.post('/', async (req, res) => {
    const newReview = await createReview (req.body)
    console.log(newReview)
    res.json(newReview)
})

module.exports = router;