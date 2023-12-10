const nodemailer = require("nodemailer");
const mailgen = require("mailgen");

const postData = async (req, res) => {
  const { userEmail, userName } = req.body;
  let config = {
    service: "gmail",
    auth: {
      user: "issacsamalex@gmail.com",
      pass: "cobamoeglgfsxqyw",
    },
  };

  let transporter = nodemailer.createTransport(config);

  let mailGenerator = new mailgen({
    theme: "salted",
    product: {
      name: "Sample Test Email",
      link: "https://mailgen.js/",
      copyright: "Copyright © 2023 test_email. All rights reserved.",
    },
  });

  let response = {
    body: {
      name: userName,
      intro: "This is a sample email. You do not need to take any action.",
      outro:
        "This email is being sent to test our email system. We are making sure that emails are being sent and received correctly.",
    },
  };

  let mail = mailGenerator.generate(response);

  let message = {
    from: "issacsamalex@gmail.com",
    to: userEmail,
    subject: "This is a sample email",
    html: mail,
  };

  await transporter
    .sendMail(message)
    .then(() => {
      return res.status(200).json({ msg: "you should receive an email" });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  //   res.status(200).json("Posted Successfully");
};

module.exports = {
  postData,
};
