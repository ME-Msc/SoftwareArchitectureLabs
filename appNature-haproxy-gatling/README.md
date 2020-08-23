* mvn compile jib:dockerBuild
* docker images
* docker run --name redis -p 6379:6379 -e ALLOW_EMPTY_PASSWORD=yes bitnami/redis
* docker run -d --name app-nature-redis-0.5-1 --cpus=0.5 -p 8081:8080 --link redis app-nature-redis
* docker run -d --name app-nature-redis-0.5-2 --cpus=0.5 -p 8082:8080 --link redis app-nature-redis
* docker run -d --name app-nature-redis-0.5-3 --cpus=0.5 -p 8083:8080 --link redis app-nature-redis
* docker run -d --name app-nature-redis-0.5-4 --cpus=0.5 -p 8084:8080 --link redis app-nature-redis
* docker ps
* haproxy -f appNature.conf
* gatling