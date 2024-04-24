const sonarScanner = require('sonar-scanner');

sonarScanner({
  // Sonarqube server URL
  serverUrl: 'http://localhost:9000/',
  // Authentication token (optional)
  token: 'sqp_60da4cf476a08d1dead5ce9528111d54edb72880',
  // Project properties file
  propertiesFile: 'sonar-project.properties',
});