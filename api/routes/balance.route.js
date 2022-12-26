                                                                     
                                                                     
                                                                     
                                             
 const { authJwt } = require("../middleware");
 const controller = require("../controllers/balance.controller");
 
 module.exports = function (app) {
   app.use(function (req, res, next) {
     res.header(
       "Access-Control-Allow-Headers", "x-session",
       "x-access-token, Origin, Content-Type, Accept"
     );
     next();
   });
   app.get("/api/getBalances", [authJwt.verifyToken], controller.getBalances);
   app.get("/api/getBalance/:id", [authJwt.verifyToken], controller.getBalance);
 
   app.post("/api/updateBalance",[authJwt.verifyToken],controller.updateBalance);
   app.post("/api/updateBalanceFromRequest",[authJwt.verifyToken],controller.updateBalanceFromRequest);
   app.post("/api/addBalance", [authJwt.verifyToken], controller.addBalance);
   app.post("/api/deleteBalance", [authJwt.verifyToken], controller.deleteBalance);
 };
 