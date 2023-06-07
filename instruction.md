# check image
  docker images

# run container
  docker ps
  docker ps -a
# docker stop
  docker stop aa1be5df8916
# docker run with port
                 host port : container port
docker run -d -p 9000:80  nginx:1.23
docker run --name web-app  -d -p 9000:80  nginx:1.23

# docker build
docker build -t node-app:1.0 .
