// Uses Declarative syntax to run commands inside a container.
pipeline {
    agent {
        kubernetes {
            yamlFile 'jenkins-pod.yaml'
        }
    }
    stages {
        stage('Notify') {
            steps {
                container('curl-jq') {
                    sh '''
                        curl -X POST -H 'Content-type: application/json' --data '{"text":"'"Job started: ${JOB_NAME}"'"}' ${SLACK_HOOK}
                    '''
                }
            }   
        }
        stage('Build') {
            steps {
                container('node') {
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'npm run test:jenkins' 
                }
            }   
        }
        stage('GitVersion Checkout') {
            when { not { changeRequest() } }
            steps {
                container('gitops') {
                    sh '''#!/bin/bash
                        # echo "Git URL: $(git config --get remote.origin.url)"
                        git_url=$(git config --get remote.origin.url)
                        cd /gitversion
                        git clone ${git_url} .
                        git fetch --tags --force
                    '''
                }
            }
        }
        stage('GitVersion Branch') {
            when { not { changeRequest() } }
            steps {
                container('gitops') {
                    sh '''#!/bin/bash
                        echo "Checkout Branch: ${BRANCH_NAME}"
                        cd /gitversion
                        git checkout ${BRANCH_NAME}
                    '''
                }
            }
        }
        stage('GitVersion') {
            when { not { changeRequest() } }
            steps {
                container('gitversion') {
                    sh '''
                        /tools/buildenv /gitversion `pwd`/gitversion
                    '''
                }
            }   
        }
        stage('Package') {
            when { not { changeRequest() } }
            steps {
                container('kaniko') {
                    sh '''
                        source `pwd`/gitversion
                        /kaniko/executor -f `pwd`/docker/ui/Dockerfile -c `pwd` --insecure --skip-tls-verify --cache=true --destination=docker.ftc-llc.net/dmos/elite-app:${FULL_SEM_VER}
                    '''
                }
           }    
        }
        stage('Test Deploy') {
            when { branch 'main' }
            steps {
                container('gitops') {
                    sh '''#!/bin/bash
                        source `pwd`/gitversion
                        cd /env-test
                        git clone https://github.com/FTCLLC/pipeline-env-test.git .
                        cd bases
                        kustomize edit set image docker.ftc-llc.net/dmos/elite-app=docker.ftc-llc.net/dmos/elite-app:${FULL_SEM_VER}
                        git add kustomization.yaml
                        git commit -m "bump: update elite-app to ${FULL_SEM_VER}"
                        git push
                    '''
                }
           }    
        }
        stage('Scan') {
            when { branch 'main' }
            steps {
                container('sonarqube') {
                    sh 'sonar-scanner -Dsonar.login=${SONAR_LOGIN}'
                }
           }    
        }
        stage('Quality Gate') {
            when { branch 'main' }
            steps {   
                container('curl-jq') {
                    // The set +x prevent commands being echoed revealing the access token
                    sh '''
                        set +x
                        [ $(curl -s -u ${SONAR_LOGIN}: https://sonarqube.ftc-llc.net/api/qualitygates/project_status?projectKey=com.ftcllc:dmos-elite-app | jq -r ".projectStatus.status") == "OK" ] || exit 1
                        set -x
                    '''
                }
           }    
        }
        // stage('Functionl Tests') {
        //     when { branch 'main' }
        //     steps {
        //         container('node') {
        //             sh '''#!/bin/bash
        //                 echo "Put functional tests here!"
        //             '''
        //         }
        //     }   
        // }
        stage('Prod Deploy') {
            when { branch 'main' }
            steps {
                container('gitops') {
                    sh '''#!/bin/bash
                        source `pwd`/gitversion
                        cd /env-prod
                        git clone https://github.com/FTCLLC/pipeline-env-prod.git .
                        cd bases
                        kustomize edit set image docker.ftc-llc.net/dmos/elite-app=docker.ftc-llc.net/dmos/elite-app:${FULL_SEM_VER}
                        git add kustomization.yaml
                        git commit -m "bump: update elite-app to ${FULL_SEM_VER}"
                        git push
                        curl -X POST -H 'Content-type: application/json' --data '{"text":"'"elite-app ${FULL_SEM_VER} deployed to test"'"}' ${SLACK_HOOK}
                    '''
                }
           }    
        }
    }
    post {
       // only triggered when blue or green sign
       success {
            sh '''
                curl -X POST -H 'Content-type: application/json' --data '{"text":"'"Job SUCCESS: ${JOB_NAME}"'"}' ${SLACK_HOOK}
            '''
       }
       // triggered when red sign
       failure {
            sh '''
                curl -X POST -H 'Content-type: application/json' --data '{"text":"'"Job FAILED: ${JOB_NAME}"'"}' ${SLACK_HOOK}
            '''
       }
    }
}