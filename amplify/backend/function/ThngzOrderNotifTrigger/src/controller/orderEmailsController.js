const { sendEmailSES } = require("../lib/aws")
const nodemailer = require("nodemailer");

const orderEmailsController = async (name, total, cart, email) => {
  try {
    console.log("in order email controller");
    const senderEmail = "support@thngz.co";

    let products = ``;
    userCart = JSON.parse(cart);
    userCart.forEach((product) => {
      products += `<li>${product.Title}</li>`
    });
    if (email != "") {
      const emailRes = await sendEmailSES({
        toAddresses: [email],
        senderEmail: senderEmail,
        body: `Hi ${name}, <br/>Your order for <ul>${products}</ul> has successfully been placed amounting a total of <h2>${total}</h2> Please have ${total} ready in cash! <br/> Thank you for shopping with us <3 Feel free to reply to this email for customer support`,
        // body: "order placed wow",
        subject: `Order Placed at Thngz!`,
      });
      console.log("sendEmailsRes", emailRes);
      return emailRes
    }
  } catch (err) {
    // try {
    //   const senderEmail = "support@thngz.co";
    //   let products = ``
    //   userCart = JSON.parse(cart)
    //   userCart.forEach((product) => {
    //       products += `<li>${product.Title}</li>`
    //   })
    //   const mailTransport = nodemailer.createTransport({
    //     host: "smtpout.secureserver.net",
    //     secure: true,
    //     secureConnection: false, // TLS requires secureConnection to be false
    //     tls: {
    //       ciphers: "SSLv3",
    //     },
    //     requireTLS: true,
    //     port: 465,
    //     debug: true,
    //     auth: {
    //       user: "support@thngz.co",
    //       pass: "09870987Ish@q",
    //     },
    //   });
    //   const mailOptions = {
    //     from: senderEmail,
    //     to: email,
    //     subject: `Order Placed at Thngz!`,
    //     html: `Hi ${name}, <br/>Your order for <ul>${products}</ul> has successfully been placed amounting a total of <h4>${total}</h4> Please have ${total} ready in cash! <br/> Thank you for shopping with us <3 Feel free to reply to this email for customer support`,
    //   };

    //   mailTransport
    //     .sendMail(mailOptions)
    //     .then(() => {
    //       console.log("Email sent successfully");
    //     })
    //     .catch((err) => {
    //       console.log("Failed to send email");
    //       console.error(err);
    //     });
    // }
    console.log("Error in order email controller", err);
  }
};

module.exports = { orderEmailsController };
