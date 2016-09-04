module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        includes: {

            build: {

                cwd: 'src/html',
                src: ['*.html'],
                dest: 'dist/',
                options: {

                    includePath: 'src/html/includes'
                }
            }

        },
        clean: {

            html: ['dist/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean', 'includes']);
};
