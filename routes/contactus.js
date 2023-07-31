const express = require("express");
const { list, create} = require("../controllers/contactus");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
// const { read } = require("../controllers/completed_test");
const router = express.Router();

router.get("/getContactUs", requireSignin, isAuth, isAdmin, list);
router.post("/create",  create);

module.exports = router;
