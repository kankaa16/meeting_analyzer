const express = require("express");

const auth = require("../middleware/auth");

const {
  create_meeting,
  get_meetings,
  get_meeting,
  analyze_meeting
} = require("../controllers/meeting_controller");

const router = express.Router();

router.use(auth);

router.post("/", create_meeting);

router.get("/", get_meetings);

router.get("/:id", get_meeting);

router.post("/:id/analyze",analyze_meeting);

module.exports = router;