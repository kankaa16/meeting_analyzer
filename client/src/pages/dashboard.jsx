import DashboardLayout from "../layouts/dashboard_layout";
import StatCard from "../components/stat_card";

function Dashboard() {
  const stats = [
    {
      title: "Meetings",
      value: 12,
      color: "#FFE082",
    },
    {
      title: "Action Items",
      value: 8,
      color: "#FFCCBC",
    },
    {
      title: "Pending",
      value: 5,
      color: "#C8E6C9",
    },
    {
      title: "Completed",
      value: "75%",
      color: "#D8C4FF",
    },
  ];

  const meetings = [
    {
      title: "Sprint Planning",
      date: "20 May 2026",
    },
    {
      title: "Product Review",
      date: "22 May 2026",
    },
    {
      title: "Client Sync",
      date: "25 May 2026",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="page-title">
        Dashboard
      </h1>

      <div className="stats-grid">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            {...item}
          />
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="neo-card">
          <div className="card-header">
            <h2>Recent Meetings</h2>

            <button className="neo-btn">
              New Meeting
            </button>
          </div>

          {meetings.map((meeting) => (
            <div
              key={meeting.title}
              className="meeting-row"
            >
              <div>
                <h4>{meeting.title}</h4>
                <span>{meeting.date}</span>
              </div>

              <button className="small-btn">
                View
              </button>
            </div>
          ))}
        </div>

        <div className="neo-card action-preview">
          <h2>Action Items</h2>

          <div className="task-item">
            <span>
              Prepare release notes
            </span>

            <div className="status pending">
              Pending
            </div>
          </div>

          <div className="task-item">
            <span>
              Final QA Testing
            </span>

            <div className="status progress">
              Progress
            </div>
          </div>

          <div className="task-item">
            <span>
              Update roadmap
            </span>

            <div className="status done">
              Done
            </div>
          </div>
        </div>
      </div>

      <div className="neo-card analysis-preview">
        <h2>Latest AI Analysis</h2>

        <div className="analysis-box">
          <h4>Summary</h4>

          <p>
            Team plans to launch next
            Friday and finalize release
            documentation beforehand.
          </p>
        </div>

        <div className="analysis-box">
          <h4>Decision</h4>

          <p>
            Product release approved for
            next Friday.
          </p>
        </div>

        <div className="analysis-box">
          <h4>Citations</h4>

          <p>00:10 • 00:20 • 01:05</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;