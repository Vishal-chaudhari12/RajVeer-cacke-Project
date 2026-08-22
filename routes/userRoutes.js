const express = require("express");

const router = express.Router();

const {
    addUser,
    getUsers
} = require("../controllers/userController");

router.post("/addUser", addUser);
router.get("/listUser", getUsers);

module.exports = router;