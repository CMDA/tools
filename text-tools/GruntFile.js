module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/*.js'],
        dest: 'tmp/build.js',
      }
    },
    encase: {                         
      develop: {                 
        separator: '\n',            
        enviroment: 'browser',     
        useStrict: true,  
        exports: [],          
        params: {"document": "document"},      
        src: 'tmp/build.js',             
        dest: 'dest/build.js'         
      }
    },
    clean: ["tmp"],
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['concat', 'encase', 'clean']
      }
    }
  });

  grunt.loadNpmTasks('grunt-encase');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['watch']);

};