echo "Cleaning mongo dataset"
sh clean-servers.sh
echo "Starting mongod"
sh start-servers.sh
echo "Waiting 15 seconds for mongod to start, before inserting"
sleep 15
echo "Inserting mock data"
mongoimport --db mock --collection users --drop --file mock-users.json --jsonArray
mongoimport --db mock --collection users --drop --file mock-services.json --jsonArray
