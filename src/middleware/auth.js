const jwt = require("jsonwebtoken");

const auth = (
  req,
  res,
  next
) => {
  try {
    const header =
      req.headers.authorization;

    if (!header) {
      return res.status(401).json({
        success: false,
      });
    }

    const token =
      header.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch {
    return res.status(401).json({
      success: false,
    });
  }
};

module.exports = auth;