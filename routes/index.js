var express = require('express');
 //var router = express.Router();
var options = { type: "application/json" };
var router = express.Router([options]);
const handleResponse = require("../middleware/handleResponse");
var userController = require("../app/user/controller/userController");

require('express-group-routes');

router.group("/user", (router) => {
  router.post("/create", userController.createUser);
  router.delete("/delete", userController.deleteUser);
  router.get("/fetchSingleUser", userController.getSingleUser);
  router.get("/getAllUser", userController.getAllUser);
  router.put("/updateUser", userController.updateUser);
});

module.exports = router;
