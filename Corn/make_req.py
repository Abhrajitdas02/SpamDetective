import requests
import json

def make_post_request():
    url = 'https://spamdetective.onrender.com/predict'
    data = {"message": "Hello, Flask!"}
    
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, data=json.dumps(data), headers=headers)
    
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")

if __name__ == '__main__':
    make_post_request()