from flask import Flask
import ext
from pymongo import MongoClient

app = Flask(__name__)
app.debug = True

client = MongoClient()
db = client.mock

@app.route("/")
def base_page():
    return "Hello from base_page"

@app.route("/service/<service_id>/<user_id>")
def handle_usage(service_id, user_id):
    resp = ext.use_service(db, service_id=service_id, user_id=user_id)
    if resp == -1:
        return "Error."
    else:
        return str(resp)

@app.route("/services/<user_id>")
def handle_service_for(user_id):
    resp = ext.services_for(db, user_id=user_id)
    return str(resp)

app.run()
