from flask import Flask, jsonify
import ext
import dashboard
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
        return jsonify({})
    else:
        return jsonify(**resp)

@app.route("/services/<user_id>")
def handle_service_for(user_id):
    resp = ext.services_for(db, user_id=user_id)
    if len(resp) == 0:
        return jsonify({"services":[]})
    else:    
        return jsonify({"services":resp})

@app.route("/myServices/<user_id>")
def handle_send_service(user_id):
    resp = dashboard._getServices(db, user_id=user_id) 
    if len(resp) == 0:
        return jsonify({"services":[]})
    else:
        return jsonify({"services":resp})

@app.route("/isAuth/<req_id>/<own_id>")
def handle_check_auth(req_id,own_id):
    resp = dashboard._isAuth(db, _req_id = req_id, _owner_id = own_id) 
    return resp



app.run()
