const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
    projectId: "vsx8rv",
    video: true,
    // trashAssetsBeforeRuns: true,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 150000,
    env: {
        appUrl: "https://app-staging.securecompliance.us",
        otpGetApi: "https://core.staging.fundo.com.au/api/uat/authorization/mobile/token",
        Path: "cypress/downloads",
        filePath: "cypress/data/test_image.png"
    },
    e2e: {
        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);
            return config;
        }, 
        specPattern: "cypress/e2e/features/*.feature",
        chromeWebSecurity: false,
    },
});
