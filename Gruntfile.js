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
            images: ['dist/images'],
            scripts: ['dist/scripts']
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
            },
            angular: {

                files: [{

                    cwd: 'bower_components/angular',
                    expand: true,
                    src: ['angular.min.js'],
                    dest: 'dist/scripts/',
                    filter: 'isFile'
                }]
            },
            app: {

                files: [{

                    cwd: 'src/scripts/src',
                    expand: true,
                    src: ['**/*.js'],
                    dest: 'dist/scripts/',
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
        },
        karma: {

            unit: {

                options: {

                    configFile: 'karma.conf.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['karma', 'clean', 'copy', 'less', 'includes']);
};
