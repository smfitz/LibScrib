const withAuth = (req, res, next) => {
    if (req.session.logged_in) {
        next();
    } else {
        res.json({message:"Not logged in"});
    }
}

module.exports = { withAuth };