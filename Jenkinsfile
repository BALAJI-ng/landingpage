pipeline {
  agent any

  environment {
    JFROG_URL = credentials('jfrog-url')
    JFROG_TOKEN = credentials('jfrog-token')
  }

  stages {
    stage('Build Angular') {
      steps {
        sh '''
          npm install
          npm run build
        '''
      }
    }

    stage('Upload to JFrog') {
      steps {
        sh '''
          curl -H "Authorization: Bearer $JFROG_TOKEN" \
               -T dist/quantx-ui/index.html \
               $JFROG_URL/npm-releases-local/fmr-ap182503/quantx-ui/index.html
        '''
      }
    }
  }
}
