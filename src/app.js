const express = require("express");
const cors = require("cors");

const trace_id = require("./middleware/trace_id");
const error_handler = require("./middleware/error_handler");

const app = express();

app.use(cors());
app.use(express.json());

app.use(trace_id);

app.get("/health", (req, res) => {
  res.status(200).json({
    traceId: req.traceId,
    success: true,
    data: {
      status: "UP",
    },
  });
});



const auth_routes =
  require("./routes/auth");

app.use("/api/auth", auth_routes);

const meeting_routes =
  require("./routes/meetings");
app.use(
  "/api/meetings",
  meeting_routes
);  

const actionItemRoutes =
  require(
    "./routes/action_items"
  );

app.use(
  "/api/action-items",
  actionItemRoutes
);  

module.exports = app;

app.use(error_handler);
