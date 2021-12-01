const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const SES = new AWS.SESV2();

const sendEmailSES = async ({ toAddresses, body, subject, senderEmail }) => {
  // * ToAddresses is an array
  const params = {
    Destination: {
      ToAddresses: toAddresses,
    },
    Content: {
      Simple: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: body,
          },
          // Text: {
          //  Charset: "UTF-8",
          //  Data: "TEXT_FORMAT_BODY"
          // }
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject,
        },
      },
    },
    FromEmailAddress: senderEmail /* required */,
    ReplyToAddresses: [senderEmail],
  };
  try {
    return SES.sendEmail(params).promise();
  } catch (err) {
    console.log("err in /lib/aws.js");
    throw err;
  }
};

module.exports = {
  sendEmailSES,
};
