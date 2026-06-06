const mongoose =
  require("mongoose");

const reminderSchema =
  new mongoose.Schema(
    {
      actionItemId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "ActionItem",
      },

      success: {
        type: Boolean,
        default: true,
      },

      sentAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "ReminderHistory",
    reminderSchema
  );