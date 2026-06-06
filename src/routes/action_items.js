const express =
  require("express");
const {
  body,
} = require(
  "express-validator"
);

const validate =
  require(
    "../middleware/validate"
  );
const auth =
  require("../middleware/auth");

const router =
  express.Router();

const {
  get_action_items,
  update_status,
  get_overdue,
} = require(
  "../controllers/action_item_controller"
);

router.use(auth);

/**
 * @swagger
 * /action-items/{id}/status:
 *   patch:
 *     summary: Update action item status
 *     tags:
 *       - Action Items
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum:
 *                   - PENDING
 *                   - IN_PROGRESS
 *                   - COMPLETED
 *     responses:
 *       200:
 *         description: Status updated
 */
router.get(
  "/",
  get_action_items
);

/**
 * @swagger
 * /action-items/{id}/status:
 *   patch:
 *     summary: Update action item status
 *     tags:
 *       - Action Items
 */
router.patch(
  "/:id/status",
  [
    body("status")
      .isIn([
        "PENDING",
        "IN_PROGRESS",
        "COMPLETED",
      ])
      .withMessage(
        "Invalid status"
      ),
  ],
  validate,
  update_status
);

/**
 * @swagger
 * /action-items/overdue:
 *   get:
 *     summary: Get overdue action items
 *     tags:
 *       - Action Items
 */
router.get(
  "/overdue",
  get_overdue
);

module.exports =
  router;