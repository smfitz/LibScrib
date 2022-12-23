// added as middleware in routes, does not allow code to execute unless logged in
const withAuth = (req, res, next) => {
    if (req.session && req.session.logged_in) {
        next();
    } else {
        res.json({ message: "Not logged in"});
    }
}

module.exports = { withAuth };