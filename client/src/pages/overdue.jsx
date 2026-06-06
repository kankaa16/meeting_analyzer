import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/dashboard_layout";

import {
  getOverdue,
} from "../services/action_item_service";

function Overdue() {

  const [items, setItems] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchOverdue();
  }, []);

  const fetchOverdue =
    async () => {
      try {

        const res =
          await getOverdue();

        setItems(
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

      <h1 className="page-title">
        Overdue Tasks
      </h1>

      {loading ? (
        <h3>Loading...</h3>
      ) : items.length === 0 ? (
        <div className="neo-card">
          <h3>
            No Overdue Tasks !
          </h3>
        </div>
      ) : (
        <div className="action-list">

          {items.map(
            (item) => (

              <div
                key={item._id}
                className="neo-card action-row"
              >
                <div>

                  <h3>
                    {item.task}
                  </h3>

                  <p>
                    Assigned to:
                    {" "}
                    {
                      item.assignee ||
                      "Unassigned"
                    }
                  </p>

                  <p>
                    Due:
                    {" "}
                    {new Date(
                      item.dueDate
                    ).toLocaleDateString()}
                  </p>

                  <p>
                    Status:
                    {" "}
                    {item.status}
                  </p>

                </div>
              </div>
            )
          )}

        </div>
      )}

    </DashboardLayout>
  );
}

export default Overdue;