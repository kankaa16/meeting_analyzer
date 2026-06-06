const { v4: uuidv4 } = require("uuid");

const trace_id = (req, res, next) => {
  req.traceId = uuidv4();
  next();
};

module.exports = trace_id;