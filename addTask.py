import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('TodoTasks')

def lambda_handler(event, context):
    try:
        task = event['task']
        description = event['description']
        due_date = event['dueDate']  # Retrieve the due date from the event payload

        # Add task to DynamoDB table
        table.put_item(
            Item={
                'ID': task,
                'description': description,
                'dueDate': due_date  # Store the due date in DynamoDB
            }
        )

        return {
            'statusCode': 200,
            'body': json.dumps("You successfully added task: " + task)
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': str(e)})
        }
