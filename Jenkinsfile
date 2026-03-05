pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-portfolio"
        DOCKER_HUB = "mahaboob3247"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Mahaboob3247/devops-portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag $IMAGE_NAME $DOCKER_HUB/$IMAGE_NAME:latest'
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push $DOCKER_HUB/$IMAGE_NAME:latest'
                    sh 'docker logout'
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker stop portfolio || true'
                sh 'docker rm portfolio || true'
                sh 'docker run -d -p 8081:80 --name portfolio $DOCKER_HUB/$IMAGE_NAME:latest'
            }
        }
    }
}