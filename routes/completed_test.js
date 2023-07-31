const expres = require("express");
const { create, read } = require("../controllers/completed_test");
const { requireSignin, isAuth } = require("../controllers/auth");
const router = expres.Router();

router.post("/save", requireSignin, isAuth, create);
router.get("/view/:userId", requireSignin, isAuth, read);

module.exports = router;