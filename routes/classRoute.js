const router = require("express").Router();

let Category = require("../Schema/classSchema");

router.route("/").get((req, res) => {
  Category.find()
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json("error" + err));
});

// add record
router.route("/add-class").post((req, res) => {
  const updatedRec = new Category(req.body);
  updatedRec
    .save()
    .then(() => res.json("class added"))
    .catch((err) => res.status(400).json("Err " + err));
});

// router.route("/:id").get((req, res) => {
//   Category.findById(req.params.id)
//     .then((user) => res.json(user))
//     .catch((err) => res.status(400).json("Error " + err));
// });

module.exports = router;
