
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// Load environmental variables from .env
require('dotenv').config();
const viewportDetails = require('./viewportDetails');

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config

    // Get the specified device type
    const device = config.env.device;

    // Set default viewport for based on device
    config.viewportWidth = viewportDetails[device].width;
    config.viewportHeight = viewportDetails[device].height;

    // Expose the device type as Cypress environment variables
    config.env.isMobile = device === 'mobile';
    config.env.isTablet = device === 'tablet';
    config.env.isDesktop = device === 'laptop';

    // Expose app version as Cypress environment variable
    config.env.appVersion = process.env.APP_VERSION || 'V1';
    
    return config;
}
  
require('@applitools/eyes-cypress')(module);