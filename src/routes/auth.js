const express = require("express");

const {
  register,
  login,
} = require("../controllers/auth_controller");

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Auth
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/register", register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", login);

module.exports = router;