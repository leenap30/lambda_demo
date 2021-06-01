import json

def hello(event, context):
        urls = ["https://youtu.be/EBSdyoO3goc",
                "https://youtu.be/su9VDwCrCos",
                "https://youtu.be/4L-mJc3XakU"];
    
    print("Hello from Lambda!")
    return {
        'statusCode': 200,
        'body': json.dumps(urls)
    }
