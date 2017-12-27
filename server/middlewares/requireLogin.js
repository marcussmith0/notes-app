
module.exports = (req, res, next) => {
    if(!req.user) {
        res.send("You must be logged in!");
    }
    next();
}