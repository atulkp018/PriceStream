import AWS from "aws-sdk";
import awsConfig from "./awsConfig";

AWS.config.update(awsConfig);

export const sendEmail = async (to, subject, body) => {
  const ses = new AWS.SES();

  const params = {
    Destination: { ToAddresses: [to] },
    Message: {
      Body: { Text: { Data: body } },
      Subject: { Data: subject },
    },
    Source: "your-email@example.com",
  };

  return ses.sendEmail(params).promise();
};
