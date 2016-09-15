# cappandson.co.uk

The main website files for cappandson.co.uk.

## Docker

An Nginx Docker container can run all static files from the dist directory.

### Starting the container

docker run --name capp-and-son -d -p 8080:80 capp-and-son

### Stopping the container

docker kill capp-and-son; docker rm capp-and-son
