const nodemailer =
  require("nodemailer");

const transporter =
  nodemailer.createTransport({
    service: "gmail",

    auth: {
      user:
        process.env.EMAIL_USER,

      pass:
        process.env.EMAIL_PASS,
    },
  });

exports.sendReminderEmail =
  async (task) => {

    if (
      !task.assigneeEmail
    ) {
      return;
    }

    console.log(
      "Sending email to:",
      task.assigneeEmail
    );

    const info =
      await transporter.sendMail({
        from:
          process.env.EMAIL_USER,

        to:
          task.assigneeEmail,

        subject:
          "Overdue Task Reminder",

        html: `
          <h2>Task Reminder</h2>

          <p>
            <strong>Task:</strong>
            ${task.task}
          </p>

          <p>
            <strong>Assignee:</strong>
            ${task.assignee}
          </p>

          <p>
            <strong>Status:</strong>
            ${task.status}
          </p>

          <p>
            <strong>Due Date:</strong>
            ${new Date(
              task.dueDate
            ).toLocaleDateString()}
          </p>
        `,
      });

    console.log(
      "Email sent!"
    );

    console.log(
      info.accepted
    );

    console.log(
      info.response
    );
  };