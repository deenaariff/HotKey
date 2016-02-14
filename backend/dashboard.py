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
def _updateUser(db, _user_id, updated_user):
	result = 0
	print(updated_user)
	result = db.users.update({}, updated_user)
	return result


# add end-user authentication to services 
def _addAuth(db, _user_id, service_id, new_user_id):
        result = db.users.update(
                {"user_id": _user_id, "services.service_id": service_id },
                {"$push": { "services.$.users_allow": new_user_id }}, 
                upsert=False, 
                multi=True
        )

# retrieve all services for a user

def _getServices(db, _user_id):
    result = ''
    for user in users_coll.find():
        if user['user_id'] == user_id:
            result = user['services'];
    return result;


def _isAuth (db, _req_id, _owner_id):
	result = 0;
	auth_users = db.users.find(
                {"user_id": _user_id, "services.service_id": service_id },
                { "services.$.users_allow": new_user_id }, 
    )
    for(user in auth_users)
    	if (user == _req_id)
    		result == 1
    return result


#TESTS
if __name__ == "__main__":
	client = MongoClient()
	db = client.mock
	pp = pprint.PrettyPrinter(depth=6)
	users = db.users.find()
	#for user in users:
	#	pp.pprint(user)
	
	string = {"name": "Aragorn", "user_id": "004", "services": {}}  
	data = json.dumps(string)  
	test_user = json.loads(data)  

	# add user
	#_addUser(test_user);

	# remove user
	#print("Removing users...")
	#_removeUser("004")

	# update user info
	#_updateUser("001", test_user)

	# add authentication
	_addAuth(db, u'000', u'001', u'099')

	# remove authentication
	#for user in db.users.find():
	#	pp.pprint(user)

	# print data

			








