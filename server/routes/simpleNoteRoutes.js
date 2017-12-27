const requireLogin = require("../middlewares/requireLogin");
const simpleNoteController = require("../controllers/simpleNoteController");

module.exports = app => {
    app.post('/api/new/simplenote', requireLogin, simpleNoteController.newSimpleNote);
}