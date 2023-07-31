const express = require("express");
const { quizByCategory, read, create, list } = require("../controllers/quiz");
const { isAdmin, requireSignin, isAuth } = require("../controllers/auth");
const router = express.Router();

router.get("/byCategory/:categoryId", requireSignin, isAuth,  quizByCategory);
router.post("/create", requireSignin, isAuth, isAdmin, create);
router.get("/get/:quizId", requireSignin, isAuth,  read);
router.get("/showQuizzes", requireSignin, isAuth,  list);

module.exports = router;