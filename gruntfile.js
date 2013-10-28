module.exports = function(grunt) {
  'use strict';
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    sampleDir: "samples",
    libDir: "lib",
    destDir: "dest",
    testDir: "test",
    docDir: "doc",

    watch: {
      sample: {
        files: ['<%= sampleDir %>/*.jsx', '<%= libDir %>/*.jsx'],
        tasks: ['jsx:build']
      },
      test: {
        files: ['<%= testDir %>/*.jsx', '<%= libDir %>'],
        tasks: ['jsx:test']
      }
    },

    jsx: {
      sample: {
        src: ['<%= sampleDir %>/*.jsx'],
        add_search_path: ['<%= libDir %>'],
        dest: '<%= sampleDir %>/',
        executable: 'node'
      },

      commonjs: {
        src: ['lib/danish-stemmer.jsx', 'lib/dutch-stemmer.jsx', 'lib/english-stemmer.jsx', 'lib/finnish-stemmer.jsx', 'lib/french-stemmer.jsx',
              'lib/german-stemmer.jsx', 'lib/hungarian-stemmer.jsx', 'lib/italian-stemmer.jsx', 'lib/norwegian-stemmer.jsx', 'lib/porter-stemmer.jsx',
              'lib/portuguese-stemmer.jsx', 'lib/romanian-stemmer.jsx', 'lib/russian-stemmer.jsx', 'lib/spanish-stemmer.jsx', 'lib/swedish-stemmer.jsx',
              'lib/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /lib\/(.+)\.jsx/,
            replace: 'dest\/$1.common.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: false,
        release: false,
        linker: 'commonjs-lib'
      },

      amd: {
        src: ['lib/danish-stemmer.jsx', 'lib/dutch-stemmer.jsx', 'lib/english-stemmer.jsx', 'lib/finnish-stemmer.jsx', 'lib/french-stemmer.jsx',
              'lib/german-stemmer.jsx', 'lib/hungarian-stemmer.jsx', 'lib/italian-stemmer.jsx', 'lib/norwegian-stemmer.jsx', 'lib/porter-stemmer.jsx',
              'lib/portuguese-stemmer.jsx', 'lib/romanian-stemmer.jsx', 'lib/russian-stemmer.jsx', 'lib/spanish-stemmer.jsx', 'lib/swedish-stemmer.jsx',
              'lib/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /lib\/(.+)\.jsx/,
            replace: 'dest\/$1.amd.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: false,
        release: false,
        linker: 'amd-lib'
      },

      closure: {
        src: ['lib/danish-stemmer.jsx', 'lib/dutch-stemmer.jsx', 'lib/english-stemmer.jsx', 'lib/finnish-stemmer.jsx', 'lib/french-stemmer.jsx',
              'lib/german-stemmer.jsx', 'lib/hungarian-stemmer.jsx', 'lib/italian-stemmer.jsx', 'lib/norwegian-stemmer.jsx', 'lib/porter-stemmer.jsx',
              'lib/portuguese-stemmer.jsx', 'lib/romanian-stemmer.jsx', 'lib/russian-stemmer.jsx', 'lib/spanish-stemmer.jsx', 'lib/swedish-stemmer.jsx',
              'lib/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /lib\/(.+)\.jsx/,
            replace: 'dest\/$1.closure.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: false,
        release: false,
        linker: 'closure-lib'
      },

      global: {
        src: ['lib/danish-stemmer.jsx', 'lib/dutch-stemmer.jsx', 'lib/english-stemmer.jsx', 'lib/finnish-stemmer.jsx', 'lib/french-stemmer.jsx',
              'lib/german-stemmer.jsx', 'lib/hungarian-stemmer.jsx', 'lib/italian-stemmer.jsx', 'lib/norwegian-stemmer.jsx', 'lib/porter-stemmer.jsx',
              'lib/portuguese-stemmer.jsx', 'lib/romanian-stemmer.jsx', 'lib/russian-stemmer.jsx', 'lib/spanish-stemmer.jsx', 'lib/swedish-stemmer.jsx',
              'lib/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /lib\/(.+)\.jsx/,
            replace: 'dest\/$1.global.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: false,
        release: false,
        linker: 'export-global'
      },

      standard: {
        src: ['lib/danish-stemmer.jsx', 'lib/dutch-stemmer.jsx', 'lib/english-stemmer.jsx', 'lib/finnish-stemmer.jsx', 'lib/french-stemmer.jsx',
              'lib/german-stemmer.jsx', 'lib/hungarian-stemmer.jsx', 'lib/italian-stemmer.jsx', 'lib/norwegian-stemmer.jsx', 'lib/porter-stemmer.jsx',
              'lib/portuguese-stemmer.jsx', 'lib/romanian-stemmer.jsx', 'lib/russian-stemmer.jsx', 'lib/spanish-stemmer.jsx', 'lib/swedish-stemmer.jsx',
              'lib/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /lib\/(.+)\.jsx/,
            replace: 'dest\/$1.js'
        },
        add_search_path: ['<%= libDir %>'],
        release: false,
        minify: false
      },

      test: {
        src: ['<%= testDir %>/*.jsx'],
        add_search_path: ['<%= libDir %>'],
        test: false
      },

      doc: {
        src: ['<%= libDir %>/*.jsx'],
        add_search_path: ['<%= libDir %>'],
        dest: '<%= docDir %>',
        mode: 'doc'
      }
    }
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['jsx:test']);
  grunt.registerTask('build', [
    'jsx:commonjs',
    'jsx:amd',
    'jsx:closure',
    'jsx:standard',
    'jsx:global'
  ]);
  grunt.registerTask('test', ['jsx:test']);
  grunt.registerTask('doc', ['jsx:doc']);
};
// vim: set expandtab tabstop=2 shiftwidth=2:
