const express =
  require("express");

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
 * /action-items:
 *   get:
 *     summary: Get all action items
 *     tags:
 *       - Action Items
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