var express = require("express");
const { getUsers, createUser, editUser, deleteUser, getUsersbyid } = require("../users/users.service");
var router = express.Router();





router.get("/",getUsers);

router.get("/:userId",getUsersbyid);

router.post("/",createUser);

router.put("/:userId", editUser);

router.delete("/:userId", deleteUser);

module.exports = router;
