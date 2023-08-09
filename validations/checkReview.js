const checkReviewer = (req, res, next) => {
    if(!req.body.reviewer){
        res.status(400).json({error: "Reviewer Name is is required"});
    }else{
        next();
    }



};



module.exports = {checkReviewer}
 