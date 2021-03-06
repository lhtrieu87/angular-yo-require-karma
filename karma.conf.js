// Karma configuration
// Generated on Sat May 18 2013 20:25:30 GMT-0700 (Pacific Daylight Time)
module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', 'requirejs'],
		files: [{
			pattern: 'app/scripts/*.js',
			included: false
		}, {
			pattern: 'app/scripts/**/*.js',
			included: false
		}, {
			pattern: 'app/bower_components/*.js',
			included: false
		}, {
			pattern: 'app/bower_components/**/*.js',
			included: false
		}, {
			pattern: 'test/spec/**/*.js',
			included: false
		}, {
			pattern: 'test/mocks/**/*.js',
			included: false
		}, 'test/main.js'],
		exclude: [],
		reporters: ['progress'],
		// web server port
		port: 9876,
		runnerPort: 9100,
		colors: true,
		logLevel: config.LOG_DEBUG,
		autoWatch: true,
		browsers: ['Chrome'],
		captureTimeout: 60000,
		singleRun: false
	});
};
