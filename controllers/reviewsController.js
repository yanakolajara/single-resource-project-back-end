const express = require('express')
const router = express.Router({mergeParams: true})

const {
    getAllReviews,
    getReviewsOfRecipe,
    createReview,
    deleteReviewById,
    updateReviewById
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

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    const deletedReview = await deleteReviewById(id)

    if(deletedReview.length === 0){
        return res.status(404).json({error: "Review not found"})

    } else{
        return res.json(deletedReview)
    }
})
router.put("/:id", async (req, res) => {
    const updateReview = await updateReviewById(req.params.id, req.body);
   
    if(updateReview.length === 0){
        return res.status(404).json({error: "Update Denied"})
    } else{
        return res.json(updateReview)
    }
})

module.exports = router;