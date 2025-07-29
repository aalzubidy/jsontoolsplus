const fs = require('fs');
const path = require('path');

/**
 * Load configuration from file specified in JSONTOOLSPLUS_CONFIG_FILE env var,
 * or fallback to config.json in the project root directory
 */
function loadConfig() {
  let configPath;
  
  // First, try to get config path from environment variable
  if (process.env.JSONTOOLSPLUS_CONFIG_FILE) {
    configPath = path.resolve(process.env.JSONTOOLSPLUS_CONFIG_FILE);
    console.log(`Using config file from JSONTOOLSPLUS_CONFIG_FILE: ${configPath}`);
  } else {
    // Fallback to config.json in project root
    configPath = path.resolve(__dirname, '../../config.json');
    console.log(`Using default config file: ${configPath}`);
  }

  try {
    // Check if config file exists
    if (!fs.existsSync(configPath)) {
      throw new Error(`Config file not found: ${configPath}`);
    }

    // Read and parse config file
    const configContent = fs.readFileSync(configPath, 'utf8');
    const config = JSON.parse(configContent);
    
    // Override with environment variables if they exist
    if (process.env.NODE_ENV) {
      config.app.environment = process.env.NODE_ENV;
    }

    console.log('Configuration loaded successfully:', {
      port: config.server.port,
      environment: config.app.environment
    });

    return config;
  } catch (error) {
    console.error('Error loading configuration:', error.message);
    console.log('Using default configuration...');
    
    // Return default configuration if file loading fails
    return {
      server: {
        port: 3030
      },
      app: {
        environment: process.env.NODE_ENV || 'development'
      }
    };
  }
}

module.exports = loadConfig; 