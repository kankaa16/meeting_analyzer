const mongoose = require("mongoose");

const transcript_schema =
  new mongoose.Schema(
    {
      timestamp: String,
      speaker: String,
      text: String,
    },
    { _id: false }
  );

const meeting_schema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      participants: [String],

      meetingDate: {
        type: Date,
        required: true,
      },

      transcript: [transcript_schema],

      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      analysis: {
        summary: [],
        decisions: [],
        actionItems: [],
        followUps: [],
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Meeting",
  meeting_schema
);