const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.register = async (
  req,
  res,
  next
) => {
    console.log("REGISTER HIT");
  try {
    const { name, email, password } =
      req.body;
console.log("1");
    const existing_user =
      await User.findOne({ email });
console.log("2");

    if (existing_user) {
      return res.status(400).json({
        success: false,
        error: {
          message:
            "User already exists",
        },
      });
    }

    const hashed_password =
      await bcrypt.hash(password, 10);
console.log("3");

    const user = await User.create({
      name,
      email,
      password: hashed_password,
    });
    console.log("4");


    res.status(201).json({
      traceId: req.traceId,
      success: true,
      data: {
        id: user._id,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (
  req,
  res,
  next
) => {
  try {
    const { email, password } =
      req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        error: {
          message:
            "Invalid credentials",
        },
      });
    }

    const is_match =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!is_match) {
      return res.status(401).json({
        success: false,
        error: {
          message:
            "Invalid credentials",
        },
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      traceId: req.traceId,
      success: true,
      data: {
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};