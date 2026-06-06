const express = require("express");

const {
  register,
  login,
} = require("../controllers/auth_controller");
const {
  body,
} = require(
  "express-validator"
);

const validate =
  require(
    "../middleware/validate"
  );

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */
router.post(
  "/register",
  [
    body("name")
      .notEmpty()
      .withMessage(
        "Name is required"
      ),

    body("email")
      .isEmail()
      .withMessage(
        "Valid email required"
      ),

    body("password")
      .isLength({
        min: 6,
      })
      .withMessage(
        "Password must be at least 6 characters"
      ),
  ],
  validate,
  register
);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Validation error
 */
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage(
        "Valid email required"
      ),

    body("password")
      .notEmpty()
      .withMessage(
        "Password is required"
      ),
  ],
  validate,
  login
);
module.exports = router;