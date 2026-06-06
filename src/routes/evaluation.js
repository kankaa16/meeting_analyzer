const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    candidateName: "Kanka Oza",
    email: "kanka.iiitv@gmail.com",
    repositoryUrl:
      "https://github.com/kankaa16/meeting_analyzer",
    deployedUrl:
      "https://meeting-analyzer02.vercel.app/",
    externalIntegration:
      "Gmail SMTP via Nodemailer",
    features: [
      "Authentication",
      "Meeting Management",
      "AI Analysis",
      "Action Item Management",
      "Overdue Detection",
      "Reminder Scheduler",
      "Swagger Documentation",
      "Docker Support",
      "CI/CD Pipeline"
    ]
  });
});

module.exports = router;