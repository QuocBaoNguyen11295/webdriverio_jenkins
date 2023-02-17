# Webdriver.io E2E integrated with Jenkins CI/CD

## How to setup Webdriver.io
```
Step 1: Run npm init to initialize the project and create a package.json
Step 2: Run npm run wdio . to initialize wdio to the project
```

## How to run CI/CD with Jenkins
```
Step 1: Run your local the command to start Jenkins: java -jar jenkins.war -httpPort=8080 --enable-future-java
Step 2: Create environment variables in Jenkins account_username = username, account_password = password
Step 3: Create a pipeline to run on the Jenkins
  Step 3.1: Add your github repo and your github info
  Step 3.2: Choose Execute Shell:
    - npm install
    - npm run <name_script> (name_script: see "scripts" in package.json)
  Step 3.3: Choose JUnit report:
    - Add 'report/*.xml' to the locate
    - Select 'If unchecked, then issues will be published to SCM provider platforms' option
```
