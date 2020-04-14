const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
      res.json({ msg: "profile routes" });

});

module.exports = router;
