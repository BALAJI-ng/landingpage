pipeline {
    agent any

    tools {
        nodejs 'node-18'   // must exist in Jenkins Global Tools
    }

    environment {
        APP_NAME = 'quantx-ui'
        BUILD_DIR = 'dist'
        ZIP_NAME = 'quantx-ui-${BUILD_NUMBER}.zip'

        // Jenkins Credentials IDs
        JFROG_URL   = credentials('jfrog-url')
        JFROG_CREDS = credentials('jfrog-creds') 
        // jfrog-creds = Username + Token (token stored as password)
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                echo 'Building Angular application...'
                sh 'npm run build -- --configuration=production'
            }
        }

        stage('Zip Build Output') {
            steps {
                echo 'Zipping Angular dist folder...'
                sh '''
                  cd ${BUILD_DIR}
                  zip -r ../${ZIP_NAME} .
                '''
            }
        }

        stage('Upload to JFrog') {
            steps {
                echo 'Uploading artifact to JFrog...'
                sh '''
                  curl -u ${JFROG_CREDS_USR}:${JFROG_CREDS_PSW} \
                  -X PUT \
                  "${JFROG_URL}/artifactory/generic-local/${APP_NAME}/${ZIP_NAME}" \
                  -T ${ZIP_NAME}
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build and upload completed successfully'
        }
        failure {
            echo '❌ Build failed'
        }
    }
}
