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
        },
        less: {

            dist: {

                files: {

                    'dist/css/main.css': 'src/less/main.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean', 'copy', 'less', 'includes']);
};
