module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/app/hello-world.component.spec.ts'
        ],
        browsers: ['Chrome'],
        singleRun: true
    });
};