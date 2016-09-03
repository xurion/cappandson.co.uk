module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        includes: {

            files: {

                src: ['**/*.html'],
                dest: 'html',
                cwd: 'src/html',
                options: {

                    includePath: "src/html",
                    silent: true
                }
            }
        },
        clean: {

            html: {

                src: ["html/*.html"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean:dist', 'includes']);
};
