const error_handler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    traceId: req.traceId,
    success: false,
    error: {
      code: err.code || "SERVER_ERROR",
      message: err.message,
    },
  });
};

module.exports = error_handler;