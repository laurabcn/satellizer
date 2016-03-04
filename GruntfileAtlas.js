// Generated on 2015-01-07 using generator-angular 0.10.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'web/public'
    };

    var modRewrite = require('connect-modrewrite');

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= yeoman.app %>/app/**/*.js', '!<%= yeoman.app %>/app/config/config.js'],
                tasks: ['includeSource:app', 'wiredep', 'newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            json: {
                files: ['<%= yeoman.app %>/app/**/*.json'],
                tasks: ['clean:server', 'merge-json','ngconstant:development'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            less: {
                files: '<%= yeoman.app %>/assets/less/**/*.less',
                tasks: ['clean:server', 'less']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/**/*.html',
                    '<%= yeoman.app %>/**/*.json',
                    '<%= yeoman.app %>/{,*/}*.js',
                    '<%= yeoman.app %>/{,*/}*.less'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '0.0.0.0',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            modRewrite([
                                '!(\\..+)$ / [L]'
                            ]),
                            connect.static('.tmp'),
                            connect().use(
                                '/vendor',
                                connect.static('./vendor')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                '/vendor',
                                connect.static('./vendor')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/app/{,*/}*.js',
                    '!<%= yeoman.app %>/app/templates.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git{,*/}*'
                    ]
                }]
            },
            server: {
                files :[{
                    src: [
                        '.tmp'
                    ]
                }]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath: /\.\.\//
            }
        },

        // Automatically inject scripts into the app
        includeSource: {
            options: {
                basePath: '<%= yeoman.app %>',
                baseUrl: '/'
            },
            app: {
                files: {
                    '<%= yeoman.app %>/index.html': '<%= yeoman.app %>/index.tpl.html'
                }
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/assets/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/assets/images']
            }
        },

        less: {
            development: {
                options: {
                    paths: ['<%= yeoman.app %>/assets/less'],
                    yuicompress: true
                },
                files: {
                    '<%= yeoman.app %>/assets/styles/pages.css': '<%= yeoman.app %>/assets/less/pages.less'
                }
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/assets/styles/main.css': [
                        '.tmp/styles/{,*/}*.css'
                    ]
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            }
        },

        concat: {
            dist: {
                files: [
                    {
                        src: ['<%= yeoman.app %>/vendor/**/*.js', '!<%= yeoman.app %>/vendor/**/*min.js'],
                        dest: '<%= yeoman.dist %>/scripts/vendor.js'
                    },
                    {
                        src: ['<%= yeoman.app %>/app/**/*.js'],
                        dest: '<%= yeoman.dist %>/scripts/scripts.js'
                    }
                ]
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/assets/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/assets/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: ['<%= yeoman.app %>/app/**/*.html'],
                    dest: '.tmp'
                }]
            }
        },

        ngtemplates:  {
            app: {
                cwd: '<%= yeoman.app %>',
                src: 'app/common/in2Formly/views/**/*.html',
                dest: '<%= yeoman.app %>/app/templates.js',
                options: {
                    module: 'atlas',
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeComments:                 true,
                        removeEmptyAttributes:          true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    }
                }
            },
            dist: {
                cwd: '<%= yeoman.app %>',
                src: 'app/**/*.html',
                dest: '.tmp/public/app/templates.js',
                options: {
                    module: 'atlas',
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeComments:                 true,
                        removeEmptyAttributes:          true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    }
                }
            }
        },

        // Combine json
        'merge-json': {
            'config': {
                files: {
                    '.tmp/public/app/config/env_dev.json': [
                        'public/app/config/env/common.json',
                        'public/app/config/env/development.json',
                        'public/app/**/config/**/**/*.json',
                        'public/app/**/widgets/**/*.json'
                    ],
                    '.tmp/public/app/config/env_prod.json': [
                        'public/app/config/env/common.json',
                        'public/app/config/env/production.json',
                        'public/app/**/config/**/**/*.json',
                        'public/app/**/widgets/**/*.json'
                    ],
                    '<%= yeoman.app %>/app/config/schema-request.json': [
                        'public/app/config/schema.json',
                        'public/app/config/schema-mock.json'
                    ]
                }
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    src: [
                        '!oldieshim.js',
                        '<%= yeoman.app %>/app/**/*.js'
                    ],
                    dest: '.tmp'
                }]
            }
        },

        // This Grunt plugin takes care of the dynamic generation of your constants
        ngconstant: {
            // Options for all targets
            options: {
                space: '  ',
                wrap: '\'use strict\';\n\n {%= __ngModule %}',
                name: 'config'
            },
            // Environment targets
            development: {
                options: {
                    dest: '<%= yeoman.app %>/app/config/config.js'
                },
                constants: function () {
                    return {
                        appSettings: grunt.file.readJSON('.tmp/public/app/config/env_dev.json')
                    };
                }
            },
            production: {
                options: {
                    dest: '<%= yeoman.app %>/app/config/config.js'
                },
                constants: function () {
                    return {
                        appSettings: grunt.file.readJSON('.tmp/public/app/config/env_prod.json')
                    };
                }
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'assets/images/{,*/}*.{webp}',
                        'assets/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/assets/images',
                    src: ['generated/*']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/assets/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: {
                tasks: [
                    'watch'
                ],
                options: {
                    logConcurrentOutput: true
                }
            },
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        },

        // Integrates jsdoc3 generation into your Grunt build
        jsdoc: {
            dist: {
                src: ['public/app/**/*.js', 'test/*.js'],
                options: {
                    destination: 'docs'
                }
            }
        },

        // Extracting strings
        nggettextExtract: {
            pot: {
                files: {
                    'public/languages/template.pot': ['public/app/**/*.html']
                }
            }
        },

        // Compiling translations
        nggettextCompile: {
            all: {
                options: {
                    format: 'json'
                },
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'po',
                        dest: 'public/languages',
                        src: ['*.po'],
                        ext: '.json'
                    }
                ]
            }
        }
    });

    grunt.registerTask('serve', [
        'clean:server',
        'merge-json',
        'less',
        'copy:styles',
        'ngtemplates:app',
        'ngconstant:development',
        'includeSource:app',
        'wiredep',
        'nggettextCompile',
        'connect:livereload',
        'concurrent:server'
    ]);

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'ngconstant:production',
        'includeSource:app',
        'wiredep',
        'ngAnnotate',
        'ngtemplates:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'copy:dist',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
        'jsdoc:dist',
        'nggettextExtract'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);

    // Renames
    grunt.renameTask('nggettext_extract', 'nggettextExtract');
    grunt.renameTask('nggettext_compile', 'nggettextCompile');
};
