import pickle
import nltk
import pandas as pd
import string
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from flask import Flask, request, jsonify
from flask_cors import CORS

nltk.download('stopwords')
nltk.download('punkt')

app = Flask(__name__)
CORS(app)

def transform_text(text):
  
    ps = PorterStemmer()
    
    text = text.lower()
    text = nltk.word_tokenize(text)

    y = []
    for i in text:
        if i.isalnum():
            y.append(i)

    text = y[:]
    y.clear()

    for i in text:
        if i not in stopwords.words('english') and i not in string.punctuation:
            y.append(i)

    text = y[:]
    y.clear()

    for i in text:
        y.append(ps.stem(i))

    return " ".join(y)

tfidf = pickle.load(open('vectorizer.pkl', 'rb'))
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/predict', methods=['POST']) # 5000 -> /predict
def predict():
    data = request.get_json()
    input_sms = data['message']
    
    transformed_sms = transform_text(input_sms)
    # 2. Vectorize
    vector_input = tfidf.transform([transformed_sms])
    # 3. Predict
    result = model.predict(vector_input)[0]
    # 4. Display
    if result == 1:
        return jsonify({'result': 'Spam'})
    else:
        return jsonify({'result': 'Not Spam'})
        
