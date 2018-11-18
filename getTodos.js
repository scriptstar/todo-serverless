const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.run = async () => {
  const params = {
    TableName: "todos"
  };

  const results = await dynamoDb.scan(params).promise();
  if (results.Items) {
    return {
      statusCode: 200,
      body: JSON.stringify(results.Items)
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "No todos exists" })
    };
  }
};
