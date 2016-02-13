import json 
import pprint 
from pymongo import MongoClient


# add new user to db
def _addUser(user):
	result = users_coll.insert(user);
	return result;

		
# remove user from db
def _removeUser(user_id):	
	result = 0
	for user in users_coll.find():
		if user['user_id'] == user_id:
			result = users_coll.remove(user)
	return result;


# update user information
def _updateUser(user_id, updated_user):
	result = 0
	for user in users_coll.find():
		if user['user_id'] == user_id:
			result = users_coll.update(user, updated_user)
	return result


# add end-user authentication to services 
def _addAuth(user_id, service, new_user):
	result = 0
	for user in users_coll.find():
		if user["user_id"] == user_id:
			for s in user["services"]:
				pp = pprint.PrettyPrinter(depth=6)
				pp.pprint(s);  
				if s["service_id"] == service:
			 		users_coll.update(s["users_allow"], {'$push': new_user}, True)
	return result



#  remove end-user authentication to services 
def _remAuth(user_id, existing_user):
	result = 0
	for user in users_coll.find():
		if user["user_id"] == user_id:
			for s in user["services"]:
				print s
				if s["service_id"] == service:
			 		users_coll.update(s["users_allow"], {'$pull': existing_user}, True)
	return result


#TESTS
if __name__ == "__main__":
	client = MongoClient()
	db = client.mock
	users_coll = db.users
	pp = pprint.PrettyPrinter(depth=6)

	
	string = {"name": "Aragorn", "user_id": "001", "services": {}}  
	data = json.dumps(string)  
	test_user = json.loads(data)  

	# add user
	#assert _addUser(data) != [{ "nInserted" : 1 }], "failed"

	# remove user
	#_removeUser("004")

	# update user info
	_updateUser("001", test_user)

	# add authentication
	_addAuth("003", "000", "000")

	# remove authentication

	# print data
	users = db.users.find()
	for user in users:
		print pp.pprint(user);  


			








