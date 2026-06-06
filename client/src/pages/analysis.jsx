import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/dashboard_layout";
import { getMeeting } from "../services/meeting_service";

function Analysis() {
  const { id } = useParams();

  const [meeting, setMeeting] =
    useState(null);

  useEffect(() => {
    fetchMeeting();
  }, []);

  const fetchMeeting =
    async () => {
      try {
        const res =
          await getMeeting(id);

        setMeeting(
          res.data.data
        );
      } catch (err) {
        console.log(err);
      }
    };

  if (!meeting) {
    return (
      <DashboardLayout>
        <h2>Loading...</h2>
      </DashboardLayout>
    );
  }

  const analysis =
    meeting.analysis || {};

  const summary =
    analysis.summary || [];

  const decisions =
    analysis.decisions || [];

  const actionItems =
    analysis.actionItems || [];

  const followUps =
    analysis.followUps || [];

  return (
    <DashboardLayout>

      <h1 className="page-title">
        AI Analysis
      </h1>

      <p className="page-subtitle">
        All insights are grounded in the
        transcript and include timestamp
        citations.
      </p>

      {/* SUMMARY */}

      <div className="neo-card">
        <h2>Summary</h2>

        {summary.length === 0 ? (
          <p>No summary found</p>
        ) : (
          summary.map(
            (item, index) => (
              <div
                key={index}
                className="analysis-item"
              >
                <p>{item.text}</p>

                <div className="citation-row">
                  {item.citations?.map(
                    (
                      citation,
                      i
                    ) => (
                      <span
                        key={i}
                        className="citation-chip"
                      >
                        {
                          citation.timestamp
                        }
                      </span>
                    )
                  )}
                </div>
              </div>
            )
          )
        )}
      </div>

      {/* DECISIONS */}

      <div className="neo-card">
        <h2>Decisions</h2>

        {decisions.length === 0 ? (
          <p>No decisions found</p>
        ) : (
          decisions.map(
            (item, index) => (
              <div
                key={index}
                className="analysis-item"
              >
                <p>{item.text}</p>

                <div className="citation-row">
                  {item.citations?.map(
                    (
                      citation,
                      i
                    ) => (
                      <span
                        key={i}
                        className="citation-chip"
                      >
                        {
                          citation.timestamp
                        }
                      </span>
                    )
                  )}
                </div>
              </div>
            )
          )
        )}
      </div>

      {/* ACTION ITEMS */}

      <div className="neo-card">
        <h2>Action Items</h2>

        {actionItems.length === 0 ? (
          <p>
            No action items found
          </p>
        ) : (
          actionItems.map(
            (item, index) => (
              <div
                key={index}
                className="action-card"
              >
                <h4>
                  {item.task}
                </h4>

                <p>
                  Assigned to:{" "}
                  {item.assignee ||
                    "Unassigned"}
                </p>

                <div className="citation-row">
                  {item.citations?.map(
                    (
                      citation,
                      i
                    ) => (
                      <span
                        key={i}
                        className="citation-chip"
                      >
                        {
                          citation.timestamp
                        }
                      </span>
                    )
                  )}
                </div>
              </div>
            )
          )
        )}
      </div>

      {/* FOLLOW UPS */}

      <div className="neo-card">
        <h2>Follow Ups</h2>

        {followUps.length === 0 ? (
          <p>
            No follow ups found
          </p>
        ) : (
          followUps.map(
            (item, index) => (
              <div
                key={index}
                className="analysis-item"
              >
                <p>{item.text}</p>

                <div className="citation-row">
                  {item.citations?.map(
                    (
                      citation,
                      i
                    ) => (
                      <span
                        key={i}
                        className="citation-chip"
                      >
                        {
                          citation.timestamp
                        }
                      </span>
                    )
                  )}
                </div>
              </div>
            )
          )
        )}
      </div>

    </DashboardLayout>
  );
}

export default Analysis;