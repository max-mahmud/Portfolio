const nodemailer = require("nodemailer");

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;
    //validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "coder.mahmud24@gmail.com",
        pass: "zlppjgvzsjawhxds",
      },
    });

    let mailDetails = {
      from: email,
      to: "coder.mahmud24@gmail.com",
      subject: "Sending Email From Portfolio",
      html: `<h3>Message:: ${msg}</h3>`,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs", err);
      } else {
        console.log("Email sent successfully");
      }
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
