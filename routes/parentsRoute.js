const router = require("express").Router();

const Parents = require("../Schema/parentSchema");

router.route("/").get((req, res) => {
  Parents.find()
    .then((parent) => res.json(parent))
    .catch((err) => res.status(400).json("Error", err));
});

router.route("/add-parents").post((req, res) => {
  const updatedRec = new Parents(req.body);
  updatedRec
    .save()
    .then(() => res.json("Parents record added"))
    .catch((err) => res.status(400).json("Error", err));
});

module.exports = router;
