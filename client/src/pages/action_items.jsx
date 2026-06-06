import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/dashboard_layout";

import {
  getActionItems,
  updateStatus,
} from "../services/action_item_service";

function ActionItems() {
  const [items, setItems] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems =
    async () => {
      try {
        const res =
          await getActionItems();

        setItems(
          res.data.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const handleStatusChange =
    async (id, status) => {
      try {
        await updateStatus(
          id,
          status
        );

        setItems((prev) =>
          prev.map((item) =>
            item._id === id
              ? {
                  ...item,
                  status,
                }
              : item
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <DashboardLayout>
      <div className="page-header">
        <h1 className="page-title">
          Action Items
        </h1>
      </div>

      {loading ? (
        <h3>Loading...</h3>
      ) : items.length === 0 ? (
        <div className="neo-card">
          <h3>
            No Action Items Found
          </h3>

          <p>
            Analyze a meeting to
            generate action items.
          </p>
        </div>
      ) : (
        <div className="action-list">
          {items.map((item) => (
            <div
              key={item._id}
              className="neo-card action-row"
            >
              <div>
                <h3>
                  {item.task}
                </h3>

                <p>
                  Assigned to:{" "}
                  {item.assignee ||
                    "Unassigned"}
                </p>

                {item.dueDate && (
                  <p>
                    Due:{" "}
                    {new Date(
                      item.dueDate
                    ).toLocaleDateString()}
                  </p>
                )}
              </div>

              <select
                value={
                  item.status
                }
                className="status-select"
                onChange={(e) =>
                  handleStatusChange(
                    item._id,
                    e.target.value
                  )
                }
              >
                <option value="PENDING">
                  PENDING
                </option>

                <option value="IN_PROGRESS">
                  IN_PROGRESS
                </option>

                <option value="COMPLETED">
                  COMPLETED
                </option>
              </select>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}

export default ActionItems;