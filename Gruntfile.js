module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		jshint: {
		      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
		      options: {
		        globals: {
		          jQuery: true
		        }
		      }
		    },
		nodemon: {
			dev: {
				script: 'src/main/app/server.js'
			}
		}
	});

	grunt.registerTask('default', ['jshint']);

	grunt.registerTask('serve', ['nodemon']);
	
};