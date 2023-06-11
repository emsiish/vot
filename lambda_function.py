import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('TodoTasks')

def lambda_handler(event, context):
    try:
        task = event['task']
        description = event['description']
        due_date = event['dueDate']

        # Add task to DynamoDB table
        table.put_item(
            Item={
                'ID': task,
                'description': description,
                'dueDate': due_date
            }
        )

        response = table.scan()
        items = response.get('Items', [])

        task_list = [{'task': item['ID'], 'description': item['description'], 'dueDate': item['dueDate']} for item in items]

        return {
            'statusCode': 200,
            'body': json.dumps(task_list)
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': str(e)})
        }
