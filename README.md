# A Serverless To-do Endpoint App Built Using AWS Lambda and DynamoDB

[![CircleCI](https://circleci.com/gh/scriptstar/todo-serverless.svg?style=svg)](https://circleci.com/gh/scriptstar/todo-serverless)

1. **Install via npm:**

```bash
npm install -g serverless
```

2. **Set-up your [Provider Credentials](./docs/providers/aws/guide/credentials.md)**. [Watch the video on setting up credentials](https://www.youtube.com/watch?v=HSd9uYj2LJA)

3. **Clone the Project**

```bash
git clone https://github.com/scriptstar/todo-serverless
cd todo-serverless
npm install
```

4. **Setting up CircleCI**
   https://serverless.com/blog/ci-cd-workflow-serverless-apps-with-circleci/

5. a) **Make changes and push the repository**

Circle CI will build the project and deploy automatically

or

5. b) **Deploy the Service manually:**

Use this when you have made changes to your Functions, Events or Resources in `serverless.yml` or you simply want to deploy all changes within your Service at the same time.

```bash
serverless deploy -v
```

## My Notes:

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
