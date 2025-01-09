const fs = require("fs");

fs.writeFile("input.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("input.txt has been saved!");

  fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("Content of input.txt:", data);
  });
});

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

const mailOptions = {
  from: "your-email@gmail.com",
  to: "recipient-email@gmail.com",
  subject: "Test Email from Node.js",
  text: "Hello! This is a test email sent from Node.js using Nodemailer.",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Email sent: " + info.response);
  }
});