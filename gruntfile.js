module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.initConfig({
    uglify: {
      my_target : {
        files: {
          '_/js/script.js': ['_/components/js/*.js']
        } //files
      } //my_target
    }, //uglify
    compass: {
      dev: {
        options:{
          config: 'config.rb'
        } //options
      } //dev
    }, //compass
    express: {
      options: {
        port: 3000,
        delay: 500,
        background: true
      },
      dev: {
        options: {
          script: './server.js'
        }
      },
      prod: {
        options: {
          script: './server.js',
          node_env: 'production'
        }
      }
    },//express
    watch: {
      scripts: {
      files: ['_/components/js/*.js'],
      tasks: ['uglify']
      }, //script
      sass: {
        files: ['_/components/sass/*.scss'],
        tasks: ['compass:dev']
      } //sass
      
    } //watch
    
  }) //initConfig
  grunt.registerTask('default', 'server', [ 'express:dev', 'watch' ]);
} //exports
