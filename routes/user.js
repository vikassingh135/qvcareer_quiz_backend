const express = require("express");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { read, update, userById } = require("../controllers/user");
const router = express.Router();

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get("/:userId", read);
router.put("/:userId", update);
router.param("userId", userById);

module.exports = router;
