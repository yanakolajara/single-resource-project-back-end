const checkReviewer = (req, res, next) => {
    if(!req.body.reviewer){
        res.status(400).json({error: "Reviewer Name is is required"});
    }else{
        next();
    }



};

const checkTitle = (req, res, next) => {
    if(!req.body.title){
        res.status(400).json({error: "Review Must Have Title"})
    }else{
        next()
    }
}

const checkRating = (req, res, next) => {
    if(typeof req.body.rating !== "number"){
        res.status(400).json({error: "Rating must have a numerical value"})
    }else{
        next()
    }
}



module.exports = {checkReviewer,
                  checkTitle,
                  checkRating
                  
}
 