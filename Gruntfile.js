// Generated on 2013-10-28 using generator-webapp 0.4.3
'use strict';

var _ = require('lodash');
var fs = require('fs');

var publications = _.map(JSON.parse(fs.readFileSync('src/data/publications.json', 'utf-8')), function(pub) {
    pub.year = pub.issued['date-parts'][0][0];
    switch (pub.type) {
        case 'article-journal':
            pub.niceType = 'Journal Article';
            break;
        case 'chapter':
            pub.niceType = 'Book Chapter';
            break;
        case 'paper-conference':
            pub.niceType = 'Conference Paper';
            break;
        case 'thesis':
            pub.niceType = 'Ph.D. Thesis';
            break;
        case 'book':
            pub.niceType = 'Book';
            break;
    };
    pub.niceAuthors = _.map(pub.author, function(author) {
        return _.values(author).reverse().join(' ');
    }).join(', ');
    return pub;
}).sort(function(a, b) {
    return a.year < b.year ? 1 : a.year === b.year ? 0 : -1;
})
var publicationsYears = _.uniq(_.pluck(publications, 'year'), true)
var publicationsTypes = _.uniq(_.pluck(publications, 'types'))

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'



module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('assemble');

    grunt.loadNpmTasks('grunt-highlight');


    grunt.initConfig({
        // configurable paths
        yeoman: {
            src: 'src',
            app: 'app',
            dist: 'dist'
        },
        watch: {
            compass: {
                files: ['<%= yeoman.src %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= yeoman.src %>/styles/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.dist %>/**/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.src %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            },
            assemble: {
                files: ['<%= yeoman.src %>/{layouts,pages,partials}/**/*.hbs'],
                tasks: ['assemble:server']
            },
            images: {
                files: ['<%= yeoman.src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'],
                tasks: ['copy:images']
            },
            data: {
                files: ['<%= yeoman.src %>/data/{,*/}*.json'],
                tasks: ['copy:data', 'assemble:server']
            },
            app_stuff: {
                files: ['<%= yeoman.src %>/pages/**', '!<%= yeoman.src %>/pages/**/*.hbs'],
                tasks: ['copy:app_stuff']
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.src %>',
                        '<%= yeoman.dist %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.src %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            app: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.app %>/*',
                        '!<%= yeoman.app %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.src %>/scripts/{,*/}*.js',
                '!<%= yeoman.src %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.src %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.src %>/images',
                javascriptsDir: '<%= yeoman.src %>/scripts',
                fontsDir: '<%= yeoman.src %>/styles/fonts',
                importPath: '<%= yeoman.src %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.app %>/{{assets}}/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
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
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        'bower-install': {
            app: {
                html: '<%= yeoman.src %>/index.html',
                ignorePath: '<%= yeoman.src %>/'
            }
        },
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.app %>/**/*.js',
                        '<%= yeoman.app %>/**/*.css',
                        // '<%= yeoman.app %>/**/*.{png,jpg,jpeg,gif,webp}', // I don't want images to be revisionned...
                        '<%= yeoman.app %>{/,/*/}styles/fonts/{,*/}*.*',
                        '!<%= yeoman.app %>/bower_components/**'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                root: '<%= yeoman.src %>',
                dest: '<%= yeoman.app %>'
            },
            html: ['<%= yeoman.src %>/{layouts,pages,partials}/**/*.hbs'],
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.app %>'],
                assetsDirs: ['<%= yeoman.app %>']
            },
            html: ['<%= yeoman.app %>/{layouts,pages,partials}/**/*.hbs'],
            css: ['<%= yeoman.app %>/*/styles/{,*/}*.css']

        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.src %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.app %>/{{assets}}/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.src %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.app %>/images'
                }]
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) styles/main.css -->
            //
            // dist: {
            //     files: {
            //         '<%= yeoman.app %>/styles/main.css': [
            //             '.tmp/styles/{,*/}*.css',
            //             '<%= yeoman.src %>/styles/{,*/}*.css'
            //         ]
            //     }
            // }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.src %>',
                    src: ['**/*.html', '!bower_components/**'],
                    dest: '<%= yeoman.app %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            app: {
                files: [{ // copy hbs templates to app
                    expand: true,
                    cwd: '<%= yeoman.src %>',
                    dest: '<%= yeoman.app %>',
                    src: [
                        'layouts/**/*.hbs',
                        'pages/**/*.hbs',
                        'partials/**/*.hbs'
                    ]
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.src %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'CNAME',
                        'images/{,*/}*.{webp,gif,svg}',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/sass-bootstrap/fonts/*.*'
                    ]
                }, { // move everything from the {{assets}} folder one level up 
                    expand: true,
                    cwd: '<%= yeoman.app %>/{{assets}}',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '**',
                    ]
                }, { // copy all th bower_component folder to dist
                    expand: true,
                    cwd: '<%= yeoman.src %>/bower_components',
                    dest: '<%= yeoman.dist %>/bower_components',
                    src: [
                        '**',
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.src %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            images: {
                expand: true,
                dot: false,
                cwd: '<%= yeoman.src %>/images',
                dest: '<%= yeoman.dist %>/images',
                src: '**'
            },
            data: {
                expand: true,
                dot: false,
                cwd: '<%= yeoman.src %>/data',
                dest: '<%= yeoman.dist %>/data',
                src: '{,*/}*.json'
            },
            app_stuff: {
                expand: true,
                dot: false,
                cwd: '<%= yeoman.src %>/pages',
                dest: '<%= yeoman.dist %>/',
                src: [
                    '**', '!**/*.hbs'
                ]
            }
        },
        concurrent: {
            server: [
                'compass',
                'copy:styles',
                'copy:app_stuff'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'compass',
                'copy:styles',
                'copy:app_stuff',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        pubs: publications,
        pub_years: publicationsYears,
        assemble: {
            options: {
                helpers: ['./src/helpers/sorted-each-helper-module.js'],
            },
            build: {
                options: {
                    flatten: false,
                    expand: true,
                    assets: '<%= yeoman.dist %>',
                    layout: 'default.hbs',
                    pubs: '<%= pubs %>',
                    pub_years: '<%= pub_years %>',
                    layoutdir: '<%= yeoman.app %>/layouts/',
                    data: '<%= yeoman.src %>/data/*.{json,yml}',
                    partials: '<%= yeoman.app %>/partials/*.hbs',
                    plugins: ['sitemap'],
                    permalinks: {
                        preset: 'pretty'
                    },
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/pages',
                    dest: '<%= yeoman.dist %>',
                    src: ['**/*.hbs']
                }],
            },
            server: {
                options: {
                    flatten: false,
                    expand: true,
                    assets: '<%= yeoman.dist %>',
                    layout: 'default.hbs',
                    pubs: '<%= pubs %>',
                    pub_years: '<%= pub_years %>',
                    layoutdir: '<%= yeoman.src %>/layouts/',
                    data: '<%= yeoman.src %>/data/*.{json,yml}',
                    partials: '<%= yeoman.src %>/partials/*.hbs',
                    plugins: [],
                    permalinks: {
                        preset: 'pretty'
                    },
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.src %>/pages',
                    dest: '<%= yeoman.dist %>',
                    src: ['**/*.hbs']
                }],
            }

        },
        highlight: { // nope 
            server: {
                options: {},
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    dest: '<%= yeoman.dist %>',
                    src: ['**/*.html', '!bower_components/**']
                }]
            }
        }
    });



    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'assemble:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'clean:app',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'copy:app',
        'rev',
        'usemin',
        'copy:dist',
        'assemble:build'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
