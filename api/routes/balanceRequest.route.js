const { authJwt } = require("../middleware");
const controller = require("../controllers/balanceRequest.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", "x-session",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/addRequest",
        [authJwt.verifyToken],
        controller.addRequest
    );

    app.get(
        "/api/getRequest",
        [authJwt.verifyToken],
        controller.getRequest
    );
     app.post("/api/updateBalanceReauest", [authJwt.verifyToken], controller.updateBalanceReauest)
    // app.get("/api/getAllTransactions", [authJwt.verifyToken], controller.getAllTransactions)
    // app.get('/api/getTransactionInfo/:customerId', [authJwt.verifyToken], controller.getTransactionInfo)
    
}; 