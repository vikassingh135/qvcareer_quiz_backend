const expres = require("express");
const { create } = require("../controllers/completed_test");
const {
  listAll,
  listBooksBySem,
  listStudyMaterialsByType,
} = require("../controllers/study_materials");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const router = expres.Router();

router.post("/save", requireSignin, isAuth, isAdmin, create);
router.get("/listAll", listAll);
router.get("listBooksBySem/:semester", listBooksBySem);
router.get("/listStudyMaterialByType/:year/:type", listStudyMaterialsByType);

module.exports = router;
