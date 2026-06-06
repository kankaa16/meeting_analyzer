import { useState } from "react";
import { createMeeting } from "../services/meeting_service";

function CreateMeetingModal({
  open,
  onClose,
  onSuccess,
}) {
  const [form, setForm] = useState({
    title: "",
    participants: "",
    meetingDate: "",
  });

  const [transcript, setTranscript] =
  useState([
    {
      timestamp: "",
      speaker: "",
      text: "",
    },
  ]);
  const addTranscriptRow = () => {
  setTranscript([
    ...transcript,
    {
      timestamp: "",
      speaker: "",
      text: "",
    },
  ]);
};
const updateTranscript = (
  index,
  field,
  value
) => {
  const updated = [...transcript];

  updated[index][field] = value;

  setTranscript(updated);
};
const removeRow = (index) => {
  const updated = transcript.filter(
    (_, i) => i !== index
  );

  setTranscript(updated);
};

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        title: form.title,

        participants:
          form.participants
            .split(",")
            .map((p) => p.trim()),

        meetingDate: form.meetingDate,
        transcript: transcript,
      };

      await createMeeting(payload);

      onSuccess();
      onClose();
    } catch (err) {
      console.log(err);
      alert("Failed to create meeting");
    }
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Create Meeting</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Meeting Title"
            onChange={handleChange}
          />

          <input
            name="participants"
            placeholder="alice@gmail.com,bob@gmail.com"
            onChange={handleChange}
          />

          <input
            type="datetime-local"
            name="meetingDate"
            onChange={handleChange}
          />

          <h3>Transcript</h3>

{transcript.map((row, index) => (
  <div
    key={index}
    className="transcript-input-row"
  >
    <input
      placeholder="00:10"
      value={row.timestamp}
      onChange={(e) =>
        updateTranscript(
          index,
          "timestamp",
          e.target.value
        )
      }
    />

    <input
      placeholder="John"
      value={row.speaker}
      onChange={(e) =>
        updateTranscript(
          index,
          "speaker",
          e.target.value
        )
      }
    />

    <input
      placeholder="Message"
      value={row.text}
      onChange={(e) =>
        updateTranscript(
          index,
          "text",
          e.target.value
        )
      }
    />

    <button
      type="button"
      className="delete-btn"
      onClick={() =>
        removeRow(index)
      }
    >
      ✕
    </button>
  </div>
))}

          <div className="modal-actions">
            <button
              type="button"
              className="small-btn"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
  type="button"
  className="small-btn"
  onClick={addTranscriptRow}
>
  + Add Transcript
</button>

            <button
              type="submit"
              className="neo-btn"
            >
              Save Meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateMeetingModal;