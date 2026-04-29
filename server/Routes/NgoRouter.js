const router = require("express").Router();
const { getNgo } = require("../Controllers/NgoController");

router.get("/ngos", getNgo);

module.exports = router;