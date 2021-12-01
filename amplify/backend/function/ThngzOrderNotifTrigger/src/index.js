// const { Amplify } = require("aws-amplify");
// const awsConfiguration = require("./aws-exports");
// Amplify.configure(awsConfiguration);
var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const sns = new AWS.SNS();

const SES = new AWS.SESV2();
const { orderEmailsController } = require("./controller/orderEmailsController");
// var ses = new aws.SES({ region: "us-east-1" });
// const test = async() => {
//   await orderEmailsController("Ishaq", 9000, "[{\"id\":\"70bffd88-7d68-4d96-a6d8-a4221c42204a\",\"Title\":\"Reebok\",\"Description\":\"Buy this to get your dad to respect you\",\"Image\":\"https://thngz5ebf2df5f5e8488e806848f32cf4482a40957-dev.s3.us-east-1.amazonaws.com/public/images/880b3937-7d9b-405a-b0e3-62ca5feae6acIMG_6847.jpg\",\"Price\":20000,\"Quantity\":-1,\"createdAt\":\"2021-10-10T21:43:26.813Z\",\"updatedAt\":\"2021-10-24T05:01:45.266Z\"}]", "mishaq.bscs18seecs@seecs.edu.pk")
// }
// test()
exports.handler = async (event, context, callback) => {
  console.log(JSON.stringify(event, null, 2));
  // event.Records.forEach(async (record) => {
    console.log(event.Records[0].eventID);
    console.log(event.Records[0].eventName);
    console.log("DynamoDB Record: %j", event.Records[0].dynamodb);

    if (event.Records[0].eventName == "INSERT") {
      const name = event.Records[0].dynamodb.NewImage.Name.S;
      const total = event.Records[0].dynamodb.NewImage.Total.N;
      const cart = event.Records[0].dynamodb.NewImage.Cart.S;
      const email = event.Records[0].dynamodb.NewImage.Email.S;
      const phone = event.Records[0].dynamodb.NewImage.Phone.S;

      console.log("Email", email);
      try {
        const emailRes = await orderEmailsController(name, total, cart, email);
        var params = {
          Message: `Your Order at Thngz has been confirmed amounting a total of ${total}`,
          Subject: "Order Placed",
          PhoneNumber: phone,
          MessageAttributes: {
                'AWS.SNS.SMS.SMSType' : {
                  DataType : 'String',
                  StringValue: 'Transactional'
                },
              },
        };
        var publishTextPromise = sns.publish(params).promise();
        publishTextPromise.then(
          function(data) {
            console.log("MessageID is " + data.MessageId);
          }).catch(
            function(err) {
            console.error(err, err.stack);
          });
        callback(null, "worked");
      } catch (err) {
        console.log("error in index.js", err);
        callback(null, err);
      }
    }
  // });
};
