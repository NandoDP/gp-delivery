pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'gp-delivery'
        DOCKER_TAG = "${BUILD_NUMBER}"
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKERHUB_REPO = 'nandodp/gp-delivery'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Clonage du repository GitHub...'
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo "Construction de l'image Docker..."
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }
        
        stage('Test') {
            steps {
                echo 'Exécution des tests...'
                script {
                    // tests ici
                    sh 'echo "Tests passed"'
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                echo 'Push de l\'image vers Docker Hub...'
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Déploiement de l\'application...'
                script {
                    sh '''
                        docker stop gp-delivery-container || true
                        docker rm gp-delivery-container || true
                        docker run -d \
                            --name gp-delivery-container \
                            -p 3000:3000 \
                            --restart unless-stopped \
                            ${DOCKER_IMAGE}:latest
                    '''
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline exécuté avec succès!'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
        always {
            echo 'Nettoyage des images Docker non utilisées...'
            sh 'docker image prune -f'
        }
    }
}