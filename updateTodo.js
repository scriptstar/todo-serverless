const uuid = require("uuid/v4");
const AWS = require("aws-sdk");
const client = new AWS.DynamoDB.DocumentClient();

module.exports.run = async event => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "todos",
    Key: {
      id: data.id
    },
    UpdateExpression: "set isComplete = :r",
    ExpressionAttributeValues: {
      ":r": data.isComplete
    },
    ReturnValues: "ALL_NEW"
  };

  const result = await client.update(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Attributes)
  };
};

/*
const params = {
    TableName: "todos",
    Key: {
      id: event.pathParameters.id
    },
    UpdateExpression: "set data.isComplete = :r",
    ExpressionAttributeValues: {
      ":r": data.isComplete
    },
    ReturnValues: "UPDATED_NEW"
  };

  await client.update(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(params.Item)
  };
*/

/*

, (err, data) => {
      if (err) {
        console.error(
          "Unable to update an item. Error JSON:",
          JSON.stringify(err, null, 2)
        );
      } else {
        console.log("data: ", data);
      }
    }
*/