import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  analyzeMeeting,
} from "../services/meeting_service";
import DashboardLayout from "../layouts/dashboard_layout";
import { getMeeting } from "../services/meeting_service";
import { useNavigate } from "react-router-dom";
function MeetingDetails() {
  const { id } = useParams();
  const [meeting, setMeeting] =
  useState(null);

  useEffect(() => {
  fetchMeeting();
}, []);
const navigate = useNavigate();

const fetchMeeting = async () => {
  try {
    const res =
      await getMeeting(id);

    setMeeting(res.data.data);
  } catch (err) {
    console.log(err);
  }
};
const handleAnalyze =
  async () => {
    try {
      await analyzeMeeting(id);

      navigate(
        `/analysis/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  const transcript = [
    {
      time: "00:10",
      speaker: "John",
      text: "We should launch next Friday.",
    },
    {
      time: "00:20",
      speaker: "Alice",
      text: "I will prepare release notes.",
    },
    {
      time: "00:40",
      speaker: "Bob",
      text: "QA testing will finish by Wednesday.",
    },
    {
      time: "01:05",
      speaker: "Sarah",
      text: "Marketing assets are ready.",
    },
  ];
  if (!meeting) {
  return (
    <DashboardLayout>
      <h2>Loading...</h2>
    </DashboardLayout>
  );
}

  return (
    <DashboardLayout>
      <div className="details-header">
        <div>
          <h1 className="page-title">{meeting.title}          </h1>

          <p>
            Meeting ID: {id}
          </p>
        </div>

        <button
  className="neo-btn"
  onClick={
    handleAnalyze
  }
>
  Analyze Meeting
</button>
      </div>

      <div className="details-grid">
        <div className="neo-card">
          <h2>Meeting Info</h2>

          <div className="info-item">
            <strong>Date</strong>
            <span>{new Date(
  meeting.meetingDate
).toLocaleDateString()}</span>
          </div>

          <div className="info-item">
            <strong>Participants</strong>
            <span>
{meeting.participants.join(", ")}            </span>
          </div>
        </div>

        <div className="neo-card">
          <h2>Quick Stats</h2>

          <div className="info-item">
            <strong>Transcript Lines</strong>
            <span>{meeting.transcript.length}</span>
          </div>
        </div>
      </div>

      <div className="neo-card transcript-card">
        <h2>Transcript</h2>

        {meeting.transcript.map(
  (line, index) => (
    <div
      key={index}
      className="transcript-line"
    >
      <div className="timestamp">
        {line.timestamp}
      </div>

      <div>
        <h4>{line.speaker}</h4>

        <p>{line.text}</p>
      </div>
    </div>
  )
)}
      </div>
    </DashboardLayout>
  );
}

export default MeetingDetails;