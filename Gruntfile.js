'use strict';

module.exports = function(grunt){
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt,{
        sprite: 'grunt-spritesmith',
        foo: '@abc/grunt-foo',        // for private modules.
        bar: 'custom/bar.js'          // for custom tasks.
      });
    const sass = require('node-sass');
   
    grunt.initConfig({
        sass:{
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist:{
                files:{
                    'css/styles.css':'css/styles.scss'
                }
            }
        },
        watch:{
            files:'css/*.scss',
            tasks:['sass']
        },
        browserSync:{
            dev:{
                bsFiles:{
                    src:[
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ],
                    options:{
                        watchTask: true,
                        server:{
                            baseDir:'./'
                        }
                    }
                }
            }
        }
    });

    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync','watch'])
}