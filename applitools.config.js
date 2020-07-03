module.exports = {
    concurrency: 10,
    apiKey: process.env.APPLITOOLS_API_KEY,
    //
    browser: [
        // Browsers with different viewports
        { width: 1200, height: 700, name: "chrome" },
        { width: 1200, height: 700, name: "firefox" },
        { width: 1200, height: 700, name: "edgechromium" },
      
        { width: 768, height: 700, name: "chrome" },
        { width: 768, height: 700, name: "firefox" },
        { width: 768, height: 700, name: "edgechromium" },

        // Mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
    ],
    // set batch name to the configuration
    batchName: 'UFG Hackathon'
};



