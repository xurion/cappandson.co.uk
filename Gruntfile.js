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

            html: ['dist/*.html'],
            images: ['dist/images']
        },
        copy: {

            images: {

                files: [{

                    cwd: 'src/images',
                    expand: true,
                    src: ['*'],
                    dest: 'dist/images/',
                    filter: 'isFile'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean', 'copy', 'includes']);
};
