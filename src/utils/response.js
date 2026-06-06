const success_response = (
  res,
  traceId,
  data,
  statusCode = 200
) => {
  return res.status(statusCode).json({
    traceId,
    success: true,
    data,
  });
};

module.exports = success_response;