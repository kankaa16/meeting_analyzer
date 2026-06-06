const Meeting = require("../models/meeting");

 const {
  analyzeTranscript,
} = require("../services/ai_service");

exports.create_meeting = async (
  req,
  res,
  next
) => {
  try {
    const {
      title,
      participants,
      meetingDate,
      transcript,
    } = req.body;

    const meeting =
      await Meeting.create({
        title,
        participants,
        meetingDate,
        transcript,
        createdBy: req.user.id,
      });

    res.status(201).json({
      traceId: req.traceId,
      success: true,
      data: meeting,
    });
  } catch (error) {
    next(error);
  }
};

exports.get_meetings = async (
  req,
  res,
  next
) => {
  try {
    const meetings =
      await Meeting.find({
        createdBy: req.user.id,
      }).sort({
        createdAt: -1,
      });

    res.json({
      traceId: req.traceId,
      success: true,
      data: meetings,
    });
  } catch (error) {
    next(error);
  }
};

exports.get_meeting = async (
  req,
  res,
  next
) => {
  try {
    const meeting =
      await Meeting.findById(
        req.params.id
      );

    if (!meeting) {
      return res.status(404).json({
        success: false,
        error: {
          message:
            "Meeting not found",
        },
      });
    }

    res.json({
      traceId: req.traceId,
      success: true,
      data: meeting,
    });
  } catch (error) {
    next(error);
  }
};
exports.analyze_meeting =
  async (
    req,
    res,
    next
  ) => {
    try {
      const meeting =
        await Meeting.findById(
          req.params.id
        );

      if (!meeting) {
        return res.status(404).json({
          success: false,
        });
      }

      // Already analyzed?
      if (
        meeting.analysis &&
        (
          meeting.analysis.summary?.length ||
          meeting.analysis.actionItems?.length ||
          meeting.analysis.decisions?.length
        )
      ) {
        return res.json({
          traceId: req.traceId,
          success: true,
          data: meeting.analysis,
        });
      }

      const analysis =
        await analyzeTranscript(
          meeting.transcript
        );

      meeting.analysis =
        analysis;

      await meeting.save();

      res.json({
        traceId: req.traceId,
        success: true,
        data: analysis,
      });

    } catch (error) {
      next(error);
    }
  };