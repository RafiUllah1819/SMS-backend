const router = require("express").Router();

const Students = require("../Schema/studentSchema");

router.route("/").get((req, res) => {
  Students.find()
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("error" + err));
});

router.route("/add-student").post((req, res) => {
  const updatedRec = new Students(req.body);
  updatedRec
    .save()
    .then(() => res.json("student added"))
    .catch((err) => res.status(400).json("Error", err));
});

module.exports = router;
