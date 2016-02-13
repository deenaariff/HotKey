echo "Cleaning mongo dataset"
sh clean-servers.sh
echo "Starting mongod"
sh start-servers.sh
echo "Waiting 25 seconds for mongod to start, before inserting"
sleep 25
echo "Inserting mock data"
mongoimport --db mock --collection users --drop --file mock-users.json --jsonArray
mongoimport --db mock --collection services --drop --file mock-services.json --jsonArray
