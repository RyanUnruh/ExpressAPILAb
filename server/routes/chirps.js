let express = require("express");
let chirpstore = require("../chirpstore");

let router = express.Router();

// get data
router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(chirpstore.GetChirp(id));
  } else {
    res.json(chirpstore.GetChirps());
  }
});

// create new entry
router.post("/", (req, res) => {
  chirpstore.CreateChirp(req.body);
  res.sendStatus(200);
});

// edit data
router.put("/:id", function(req, res) {
  chirpstore.UpdateChirp(req.params.id, req.body);
  res.sendStatus(200);
});

// delete entry
router.delete("/:id", (req, res) => {
  chirpstore.DeleteChirp(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
