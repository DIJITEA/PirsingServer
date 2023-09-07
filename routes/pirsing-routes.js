const express = require("express");
var cors = require("cors");
var corsOptions = {
  origin: "https://DIJITEA.github.io/PirsingLight",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const {
  getPirsing,
  updatePirsing,
  //   getMovie,
  //   deleteMovie,
  //   addMovie,
  //   updateMovie,
} = require("../controllers/pirsing-controller");

const router = express.Router();

router.get("/pirsing", cors(corsOptions), getPirsing);
// router.get('/movies/:id', getMovie);
// router.delete('/movies/:id', deleteMovie);
// router.post('/movies', addMovie);
router.patch("/pirsing/:id", cors(corsOptions), updatePirsing);

module.exports = router;
