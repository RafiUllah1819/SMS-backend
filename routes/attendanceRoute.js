const router = require("express").Router();
const Attendance = require("../Schema/attendanceSchema");

router.route("/").get((req, res) => {
  Attendance.find()
    .then((attendance) => res.json(attendance))
    .catch((err) => res.status(400).json("error", err));
});

router.route("/add-attendance").post((req, res) => {
  const updatedRec = new Attendance(req.body);
  updatedRec
    .save()
    .then(() => res.json("Attendance added"))
    .catch((err) => res.status(400).json("Error", err));
});

module.exports = router;
