const express = require("express");
const { listByCategory, list, create, remove, read } = require("../controllers/question");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
// const { read } = require("../controllers/completed_test");
const router = express.Router();

router.get("/byQuiz/:quizId", requireSignin, isAuth, listByCategory);
router.get("/getQuestions", requireSignin, isAuth, list);
router.post("/create", requireSignin, isAuth, isAdmin, create);
router.get("/:questionId", requireSignin, isAuth, read);
router.delete("/:questionId", requireSignin, isAuth, isAdmin, remove);

module.exports = router;
