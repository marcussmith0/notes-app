
exports.currentUser = (req, res) => {
    res.send(req.user);
}

exports.logout = (req, res) => {
    req.logout();
    res.send(req.user);
}