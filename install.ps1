# On EC2
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user

# Local
docker build -t nestjs-app .
docker save -o C:\Users\tyler\Downloads\test-image.tar nestjs-app

# On EC2
docker load -i docker-images/test-image.tar
docker run --rm -p 3000:3000 nestjs-app

# On MongoDB
# Allow EC2 .IP

# On EC2 SG
# Allow local IP for ssh and 3000