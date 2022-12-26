const { authJwt } = require("../middleware");
const controller = require("../controllers/transaction.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", "x-session",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/addTransaction",
        [authJwt.verifyToken],
        controller.addTransaction
    );

    app.post(
        "/api/editTransaction",
        [authJwt.verifyToken],
        controller.editTransaction
    );
    app.post("/api/deleteTransaction", [authJwt.verifyToken], controller.deleteTransaction)
    app.get("/api/getAllTransactions", [authJwt.verifyToken], controller.getAllTransactions)
    app.get('/api/getTransactionInfo/:customerId', [authJwt.verifyToken], controller.getTransactionInfo)
    
}; 