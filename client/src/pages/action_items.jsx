import DashboardLayout from "../layouts/dashboard_layout";

function ActionItems() {
  const items = [
    {
      task: "Prepare release notes",
      assignee: "Alice",
      status: "PENDING",
    },
    {
      task: "Complete QA testing",
      assignee: "Bob",
      status: "IN_PROGRESS",
    },
    {
      task: "Update roadmap",
      assignee: "Sarah",
      status: "COMPLETED",
    },
  ];

  return (
    <DashboardLayout>
      <div className="page-header">
        <h1 className="page-title">
          Action Items
        </h1>

        <button className="neo-btn">
          + Create
        </button>
      </div>

      <div className="action-list">
        {items.map((item, index) => (
          <div
            key={index}
            className="neo-card action-row"
          >
            <div>
              <h3>{item.task}</h3>

              <p>{item.assignee}</p>
            </div>

            <select
              defaultValue={item.status}
              className="status-select"
            >
              <option>PENDING</option>

              <option>
                IN_PROGRESS
              </option>

              <option>
                COMPLETED
              </option>
            </select>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default ActionItems;