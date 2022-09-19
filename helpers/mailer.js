const mailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

let transporter;
try {
  // Creating a transporter
  transporter = mailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 25,
    auth: {
      user: "",
      pass: "",
    },
  });

  exports.sendEmail = async (
    message,
    email,
    subject,
    from,
    too,
    attachments
  ) => {
    try {
      // sending the email
      const to = `"${too}" <${email}>`;
      const emailsent = await transporter.sendMail({
        from: "newFileNotifier@M.com",
        to: to,
        subject: subject,
        text: message,
        attachments: attachments,
      });

      console.log(emailsent);
      console.log("Email sent on " + new Date());
      return;
    } catch (e) {
      throw e;
    }
  };
} catch (err) {
  console.log(err);
}