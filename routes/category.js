const express = require("express");
const {
  list,
  create,
  categoryById,
  read,
  update,
  remove,
} = require("../controllers/category");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const router = express.Router();

router.get("/categories",  requireSignin, isAuth, list);
router.get("/:categoryId",  requireSignin, isAuth, read);
router.post("/create",  requireSignin, isAuth, isAdmin, create);
router.put("/:categoryId/:userId",  requireSignin, isAuth, isAdmin, update);
router.delete("/:categoryId",  requireSignin, isAuth, isAdmin, remove);
router.param("categoryId",  requireSignin, isAuth, categoryById);
router.param("userId",  requireSignin, isAuth, userById);

module.exports = router;
