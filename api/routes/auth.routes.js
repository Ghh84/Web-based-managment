//const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
    console.log('AUTH ROUTES......')
    app.use(function (req, res, next) {
       /*  res.header(
            "Access-Control-Allow-Headers", "x-session",
            "x-access-token, Origin, Content-Type, Accept"
        ); */
        next();
    });

    app.post("/api/auth/signin", controller.signin);
    app.post("/api/auth/authenticateUser", controller.authenticateUser);
    //app.post("api/merchants", controller.merchants);
};