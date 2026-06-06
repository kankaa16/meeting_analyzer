const ActionItem =
  require("../models/action_item");

exports.get_action_items =
  async (
    req,
    res,
    next
  ) => {
    try {

      const filter = {
  createdBy:
    req.user.id,
};

      if (req.query.status) {
        filter.status =
          req.query.status;
      }

      if (req.query.assignee) {
        filter.assignee =
          req.query.assignee;
      }

      if (req.query.meetingId) {
        filter.meetingId =
          req.query.meetingId;
      }

      const items =
        await ActionItem.find(
          filter
        ).sort({
          createdAt: -1,
        });

      res.json({
        traceId:
          req.traceId,
        success: true,
        data: items,
      });

    } catch (err) {
      next(err);
    }
  };

exports.update_status =
  async (
    req,
    res,
    next
  ) => {
    try {

      const item =
        await ActionItem.findByIdAndUpdate(
          req.params.id,
          {
            status:
              req.body.status,
          },
          {
            new: true,
          }
        );

      if (!item) {
        return res.status(404).json({
          traceId:
            req.traceId,
          success: false,
          error: {
            message:
              "Action item not found",
          },
        });
      }

      res.json({
        traceId:
          req.traceId,
        success: true,
        data: item,
      });

    } catch (err) {
      next(err);
    }
  };

exports.get_overdue =
  async (
    req,
    res,
    next
  ) => {
    try {

       const items =
  await ActionItem.find({
    createdBy:
      req.user.id,

    status: {
      $ne:
        "COMPLETED",
    },

    dueDate: {
      $lt:
        new Date(),
    },
  });

      res.json({
        traceId:
          req.traceId,
        success: true,
        data: items,
      });

    } catch (err) {
      next(err);
    }
  };