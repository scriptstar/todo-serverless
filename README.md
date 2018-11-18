[![CircleCI](https://circleci.com/gh/scriptstar/todo-serverless.svg?style=svg)](https://circleci.com/gh/scriptstar/todo-serverless)

#

getTodos
createTodo
updateTodo
destroyTodo

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.ReadData.html

see the last answer:
https://stackoverflow.com/questions/50598623/aws-dynamodb-not-fetching-data-synchronously-by-node-js

## To deploy

sls deploy

## To deploy a specific function

sls deploy --f [name-of-the-function]

## Get error/debugging logs for a function

sls logs --function [name-of-the-function]

e.g: sls logs --function getTodos

## curl command to get all the data:

curl https://bryvyl33nd.execute-api.us-east-1.amazonaws.com/dev/todos

## curl command for adding new data:

curl -X POST https://bryvyl33nd.execute-api.us-east-1.amazonaws.com/dev/todos --data '{ "todo": "make to-do app" }'

## curl command to update:

curl -X PUT https://bryvyl33nd.execute-api.us-east-1.amazonaws.com/dev/todos --data '{"id":"efeca490-5cbe-4efe-a1c0-d4e88aefa773","isComplete":true,"todo":"show to Haneela"}'

## curl command to delete:

curl -X DELETE https://bryvyl33nd.execute-api.us-east-1.amazonaws.com/dev/todos/386beb7f-cf44-48f7-a1f6-2ee59b94da51

## Amazon DynamoDB API and Required Permissions for Actions:

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/api-permissions-reference.html

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html

Get Returnvalues
https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html
