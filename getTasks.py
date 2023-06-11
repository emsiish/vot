import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('TodoTasks')

def lambda_handler(event, context):
    try:
        # Fetch all tasks from DynamoDB table
        response = table.scan()
        items = response.get('Items', [])

        # Construct a list of tasks with their descriptions and new lines
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
