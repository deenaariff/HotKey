from pymongo import MongoClient

def services_for(c, user_id=""):
    services = []
    users = c.users.find()
    
    for u in users:
        for s in u['services']:
            if user_id in s['users_allow'] and s['service_id'] not in services:
                services.append(s['service_id'])

    return services

def use_service(c, service_id="", user_id=""):
    bundles = c.users.find({"services.service_id": service_id, "services.users_allow": user_id})
    
    return_message = {}
    
    bundles = [b['services'] for b in bundles]
    
    if len(bundles) == 0:
        return -1

    if len(bundles) > 0:
        bundles = bundles[0][0]

    return_message['username'] = bundles['auth_bundle']['username']
    return_message['password'] = bundles['auth_bundle']['password']

    service = c.services.find({"service_id": service_id})[0]

    return_message['login_page'] = service['login_page']
    return_message['logout_page'] = service['logout_page']

    return return_message

if __name__ == "__main__":
    client = MongoClient()
    db = client.mock
    
    assert services_for(db, user_id="000") == [], "failed."
    assert services_for(db, user_id="003") == [u'001'], "failed."
    assert services_for(db, user_id="001") == [u'000'], "failed."
    assert services_for(db, user_id="002") == [u'000'], "failed."

    print use_service(db, service_id="000", user_id="001")
    print use_service(db, service_id="000", user_id="002")
    print use_service(db, service_id="000", user_id="003")
    print use_service(db, service_id="000", user_id="004")
