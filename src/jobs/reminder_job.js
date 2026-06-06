const cron =
  require("node-cron");

const ActionItem =
  require(
    "../models/action_item"
  );

const ReminderHistory =
  require(
    "../models/reminder_history"
  );

const {
  sendReminderEmail,
} = require(
  "../services/email_service"
);

console.log(
  "Reminder job loaded"
);

cron.schedule(
  "*/1 * * * *",
  async () => {

    console.log(
      "Checking overdue tasks..."
    );

    try {

      const overdueTasks =
        await ActionItem.find({
          status: {
            $ne:
              "COMPLETED",
          },

          dueDate: {
            $lt:
              new Date(),
          },
        });

      for (
        const task of overdueTasks
      ) {

        try {

          await sendReminderEmail(
            task
          );

          await ReminderHistory.create({
            actionItemId:
              task._id,

            success:
              true,
          });

          console.log(
            `Reminder sent: ${task.task}`
          );

        } catch (error) {

          console.log(
            error.message
          );

          await ReminderHistory.create({
            actionItemId:
              task._id,

            success:
              false,
          });
        }
      }

    } catch (error) {

      console.log(
        error.message
      );
    }
  }
);

console.log(
  "Cron scheduled"
);