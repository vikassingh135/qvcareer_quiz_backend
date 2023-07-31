const StudyMaterial = require("../models/study_material");
const { errorHandler } = require("../helpers/dbErrorHandler");
const { find } = require("../models/user");

exports.create = (req, res) => {
  const studyMaterial = new StudyMaterial(req.body);
  studyMaterial.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.listAll = (req, res) => {
    StudyMaterial.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    })
}

exports.listBooksBySem = (req, res) => {
    StudyMaterial.find({"year": req.params.year}).exec((err,data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.listStudyMaterialsByType = (req, res) => {
    StudyMaterial.find({"year": req.params.year, "content_type": req.params.type}).exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}