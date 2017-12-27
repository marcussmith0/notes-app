const mongoose = require("mongoose");
const SimpleNote = mongoose.model("simplenote");

exports.newSimpleNote = async (req, res) => {

    const note = await new SimpleNote({
        title: req.body.title,
        content: req.body.content,
        date: new Date(),
        _creator: req.user.id
    }).save();

    const user = req.user.save()
    res.send(user);
}