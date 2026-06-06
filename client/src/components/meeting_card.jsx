import { Link } from "react-router-dom";

function MeetingCard({ meeting }) {
  return (
    <div className="meeting-card">
      <div>
        <h3>{meeting.title}</h3>

        <p>
          {new Date(
            meeting.meetingDate
          ).toLocaleDateString()}
        </p>

        <div className="meeting-tags">
          {meeting.participants?.map(
            (participant) => (
              <span key={participant}>
                {participant}
              </span>
            )
          )}
        </div>
      </div>

      <div className="meeting-actions">
        <Link
          to={`/meetings/${meeting._id}`}
          className="small-btn"
        >
          View
        </Link>

        <Link
          to={`/analysis/${meeting._id}`}
          className="small-btn analyze-btn"
        >
          Analyze
        </Link>
      </div>
    </div>
  );
}

export default MeetingCard;