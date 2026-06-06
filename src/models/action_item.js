const mongoose =
  require("mongoose");

const actionItemSchema =
  new mongoose.Schema(
    {
      meetingId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Meeting",
      },

      createdBy: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      task: {
        type: String,
        required: true,
      },

      assignee: {
        type: String,
        default: "",
      },

      assigneeEmail: {
        type: String,
        default: "",
      },

      dueDate: {
        type: Date,
      },

      status: {
        type: String,
        enum: [
          "PENDING",
          "IN_PROGRESS",
          "COMPLETED",
        ],
        default: "PENDING",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "ActionItem",
    actionItemSchema
  );