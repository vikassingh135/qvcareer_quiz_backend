const express = require('express');
const router = express.Router();

const {userSignupValidator} = require("../validator");
const { signup, signout, signin, requireSignin } = require('../controllers/auth');

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.post("/signout", requireSignin ,signout);

module.exports = router;
