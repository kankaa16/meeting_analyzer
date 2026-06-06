const express = require("express");

const auth = require("../middleware/auth");
const {
  body,
} = require(
  "express-validator"
);

const validate =
  require(
    "../middleware/validate"
  );
const {
  create_meeting,
  get_meetings,
  get_meeting,
  analyze_meeting,
} = require("../controllers/meeting_controller");

const router = express.Router();

router.use(auth);

/**
 * @swagger
 * /meetings:
 *   post:
 *     summary: Create a meeting
 *     tags:
 *       - Meetings
 *     responses:
 *       201:
 *         description: Meeting created
 */
router.post(
  "/",
  [
    body("title")
      .notEmpty()
      .withMessage(
        "Title is required"
      ),

    body("transcript")
      .notEmpty()
      .withMessage(
        "Transcript is required"
      ),

    body("meetingDate")
      .notEmpty()
      .withMessage(
        "Meeting date is required"
      ),
  ],
  validate,
  create_meeting
);
/**
 * @swagger
 * /meetings:
 *   get:
 *     summary: Get all meetings
 *     tags:
 *       - Meetings
 *     responses:
 *       200:
 *         description: List of meetings
 */
router.get("/", get_meetings);

/**
 * @swagger
 * /meetings/{id}:
 *   get:
 *     summary: Get meeting by ID
 *     tags:
 *       - Meetings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Meeting details
 */
router.get("/:id", get_meeting);

/**
 * @swagger
 * /meetings/{id}/analyze:
 *   post:
 *     summary: Analyze meeting transcript using AI
 *     tags:
 *       - Meetings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Analysis generated
 */
router.post(
  "/:id/analyze",
  analyze_meeting
);

module.exports = router;