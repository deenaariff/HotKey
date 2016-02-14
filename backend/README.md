To do mock database run `./start-mock.sh`. This starts a mongod database, inserts mock data and then starts a python webserver.


## Routes

### `/services/:userid`
This returns back the services available for the `userid`. If there are no services available for the user it returns back an empty list. The structure of the returned json is:

```json
{
  "services": [
    "000",
    "003"
  ]
}
```

If there are no services found for our user the response is:

```json
{
  "services": []
}
``` 

### `/service/:serviceid/:userid`
Returns back the information needed to login to a service. It contains the username, password, login and password for the specific service.

Structure of the returned json:

```json
{
  "login_page": "wolfram.com/login", 
  "logout_page": "wolfram.com/logout", 
  "password": "onetorulethemall", 
  "username": "sarumanrules"
}
```

If there is no login information available for the userid and serviceid pairing the response is:

```json
{
}
```
