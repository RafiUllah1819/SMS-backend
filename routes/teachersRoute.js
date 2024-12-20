const router = require("express").Router();

const Teachers = require("../Schema/TeacherSchema");

router.route("/").get((req, res) => {
  Teachers.find()
    .then((teacher) => res.json(teacher))
    .catch((err) => res.json(400).json("error", err));
});

router.route("/add-teacher").post((req, res) => {
  const updatedRec = new Teachers(req.body);
  updatedRec
    .save()
    .then(() => res.json("teacher record added"))
    .catch((err) => res.status(err).json("Error ", err));
});

module.exports = router;
