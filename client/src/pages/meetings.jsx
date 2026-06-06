import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/dashboard_layout";
import MeetingCard from "../components/meeting_card";
import CreateMeetingModal from "../components/create_meeting_modal";

import {
  getMeetings,
} from "../services/meeting_service";

function Meetings() {
  const [meetings, setMeetings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);
  const [showModal, setShowModal] =
    useState(false);

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings =
    async () => {
      try {
        const res =
          await getMeetings();

        setMeetings(
          res.data.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <DashboardLayout>
      <div className="page-header">
  <div>
    <h1 className="page-title">
      Meetings
    </h1>

    <p className="page-subtitle">
      Manage and analyze meetings
    </p>
  </div>

  <button
    className="neo-btn"
    onClick={() =>
      setShowModal(true)
    }
  >
    + Create Meeting
  </button>
</div>

<CreateMeetingModal
  open={showModal}
  onClose={() =>
    setShowModal(false)
  }
  onSuccess={fetchMeetings}
/>

      {loading ? (
        <h3>Loading...</h3>
      ) : meetings.length === 0 ? (
        <div className="empty-state">
          <h3>No Meetings Yet</h3>

          <p>
            Create your first meeting
          </p>
        </div>
      ) : (
        <div className="meeting-list">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting._id}
              meeting={meeting}
            />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}

export default Meetings;