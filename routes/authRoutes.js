const passport = require("passport");
const authController = require("../controllers/authController");

module.exports = app => {
    app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"]}));
    
    app.get("/auth/google/callback", passport.authenticate("google"));    

    app.get("/api/current_user", authController.currentUser);

    app.get("/api/logout", authController.logout);
}