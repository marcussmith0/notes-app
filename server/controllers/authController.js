
exports.currentUser = (req, res) => {
    res.send(req.user);
}

exports.logout = (req, res) => {
    req.logout();
    res.redirect("/");
}

exports.login = (req, res) => {
    res.redirect("/notes");
}