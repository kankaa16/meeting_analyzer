import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/dashboard_layout";
import StatCard from "../components/stat_card";

import {
  getMeetings,
} from "../services/meeting_service";

import {
  getActionItems,
} from "../services/action_item_service";

function Dashboard() {
  const [meetings, setMeetings] =
    useState([]);

  const [actionItems, setActionItems] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =
    async () => {
      try {
        const meetingsRes =
          await getMeetings();

        const actionRes =
          await getActionItems();

        setMeetings(
          meetingsRes.data.data
        );

        setActionItems(
          actionRes.data.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const completed =
    actionItems.filter(
      (item) =>
        item.status ===
        "COMPLETED"
    ).length;

  const pending =
    actionItems.filter(
      (item) =>
        item.status !==
        "COMPLETED"
    ).length;

  const stats = [
    {
      title: "Meetings",
      value: meetings.length,
      color: "#FFE082",
    },
    {
      title: "Action Items",
      value: actionItems.length,
      color: "#FFCCBC",
    },
    {
      title: "Pending",
      value: pending,
      color: "#C8E6C9",
    },
    {
      title: "Completed",
      value: completed,
      color: "#D8C4FF",
    },
  ];

  const latestMeeting =
    meetings.find(
      (meeting) =>
        meeting.analysis
    );

  if (loading) {
    return (
      <DashboardLayout>
        <h2>Loading...</h2>
      </DashboardLayout>
    );
  }

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
            <h2>
              Recent Meetings
            </h2>
          </div>

          {meetings.length ===
          0 ? (
            <p>
              No meetings found
            </p>
          ) : (
            meetings
              .slice(0, 5)
              .map(
                (
                  meeting
                ) => (
                  <div
                    key={
                      meeting._id
                    }
                    className="meeting-row"
                  >
                    <div>
                      <h4>
                        {
                          meeting.title
                        }
                      </h4>

                      <span>
                        {new Date(
                          meeting.meetingDate
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                )
              )
          )}
        </div>

        <div className="neo-card action-preview">
          <h2>
            Action Items
          </h2>

          {actionItems.length ===
          0 ? (
            <p>
              No action items
            </p>
          ) : (
            actionItems
              .slice(0, 5)
              .map(
                (
                  item
                ) => (
                  <div
                    key={
                      item._id
                    }
                    className="task-item"
                  >
                    <span>
                      {
                        item.task
                      }
                    </span>

                    <div
                      className="status"
                    >
                      {
                        item.status
                      }
                    </div>
                  </div>
                )
              )
          )}
        </div>
      </div>

      <div className="neo-card analysis-preview">
        <h2>
          Latest AI Analysis
        </h2>

        {!latestMeeting
          ?.analysis ? (
          <p>
            No analysis
            available
          </p>
        ) : (
          <>
            <div className="analysis-box">
              <h4>
                Summary
              </h4>

              <p>
                {latestMeeting
                  .analysis
                  ?.summary?.[0]
                  ?.text ||
                  "No summary"}
              </p>
            </div>

            <div className="analysis-box">
              <h4>
                Decision
              </h4>

              <p>
                {latestMeeting
                  .analysis
                  ?.decisions?.[0]
                  ?.text ||
                  "No decisions"}
              </p>
            </div>

            <div className="analysis-box">
              <h4>
                Action Item
              </h4>

              <p>
                {latestMeeting
                  .analysis
                  ?.actionItems?.[0]
                  ?.task ||
                  "No action items"}
              </p>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;