const express = require("express");

const {
  getPirsing,
  //   getMovie,
  //   deleteMovie,
  //   addMovie,
  //   updateMovie,
} = require("../controllers/pirsing-controller");

const router = express.Router();

router.get("/pirsing", getPirsing);
// router.get('/movies/:id', getMovie);
// router.delete('/movies/:id', deleteMovie);
// router.post('/movies', addMovie);
// router.patch('/movies/:id', updateMovie);

module.exports = router;
