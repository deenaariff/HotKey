mkdir ~/data
mkdir ~/data/mongod
mkdir ~/data/mongod/db
nohup mongod --dbpath ~/data/mongod/db > mongod.out &
