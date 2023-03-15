const express = require("express");
const router = express.Router();
const { getSociete } = require("../controllers/societeController");

router.route("/getSociete").get(getSociete);





module.exports = router;