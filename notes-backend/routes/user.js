const express = require("express");
const router = express.Router();
const { authenticateUser } =
require("../middlewares/auth");
const {handleUserRegistration,
     handleUserLogin,
     handleCurrentUser,
     handleLogout
} = require("../controllers/user");

router.get(
     "/me",
     authenticateUser,
     handleCurrentUser
);
router.post("/register", handleUserRegistration);
router.post("/login", handleUserLogin)
router.post("/logout", handleLogout);
module.exports = router;