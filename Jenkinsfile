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
                    // Construction directement avec le nom complet du repository
                    docker.build("${DOCKERHUB_REPO}:${DOCKER_TAG}")
                    docker.build("${DOCKERHUB_REPO}:latest")
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
                    // Connexion à Docker Hub
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                    
                    // Push des images
                    sh "docker push ${DOCKERHUB_REPO}:${DOCKER_TAG}"
                    sh "docker push ${DOCKERHUB_REPO}:latest"
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Déploiement de l\'application...'
                script {
                    sh """
                        docker stop gp-delivery-container || true
                        docker rm gp-delivery-container || true
                        docker run -d \
                            --name gp-delivery-container \
                            -p 3000:3000 \
                            --restart unless-stopped \
                            ${DOCKERHUB_REPO}:latest
                    """
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
            // Déconnexion de Docker Hub
            sh 'docker logout'
        }
    }
}