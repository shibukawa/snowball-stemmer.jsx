module.exports = function(grunt) {
  'use strict';
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    sampleDir: "samples",
    libDir: "src",
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
        src: ['src/danish-stemmer.jsx', 'src/dutch-stemmer.jsx', 'src/english-stemmer.jsx', 'src/finnish-stemmer.jsx', 'src/french-stemmer.jsx',
              'src/german-stemmer.jsx', 'src/hungarian-stemmer.jsx', 'src/italian-stemmer.jsx', 'src/norwegian-stemmer.jsx', 'src/porter-stemmer.jsx',
              'src/portuguese-stemmer.jsx', 'src/romanian-stemmer.jsx', 'src/russian-stemmer.jsx', 'src/spanish-stemmer.jsx', 'src/swedish-stemmer.jsx',
              'src/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /src\/(.+)\.jsx/,
            replace: 'dest\/$1.common.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: false,
        release: true,
        linker: 'commonjs-lib'
      },

      amd: {
        src: ['src/danish-stemmer.jsx', 'src/dutch-stemmer.jsx', 'src/english-stemmer.jsx', 'src/finnish-stemmer.jsx', 'src/french-stemmer.jsx',
              'src/german-stemmer.jsx', 'src/hungarian-stemmer.jsx', 'src/italian-stemmer.jsx', 'src/norwegian-stemmer.jsx', 'src/porter-stemmer.jsx',
              'src/portuguese-stemmer.jsx', 'src/romanian-stemmer.jsx', 'src/russian-stemmer.jsx', 'src/spanish-stemmer.jsx', 'src/swedish-stemmer.jsx',
              'src/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /src\/(.+)\.jsx/,
            replace: 'dest\/$1.amd.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: false,
        release: true,
        linker: 'amd-lib'
      },

      closure: {
        src: ['src/danish-stemmer.jsx', 'src/dutch-stemmer.jsx', 'src/english-stemmer.jsx', 'src/finnish-stemmer.jsx', 'src/french-stemmer.jsx',
              'src/german-stemmer.jsx', 'src/hungarian-stemmer.jsx', 'src/italian-stemmer.jsx', 'src/norwegian-stemmer.jsx', 'src/porter-stemmer.jsx',
              'src/portuguese-stemmer.jsx', 'src/romanian-stemmer.jsx', 'src/russian-stemmer.jsx', 'src/spanish-stemmer.jsx', 'src/swedish-stemmer.jsx',
              'src/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /src\/(.+)\.jsx/,
            replace: 'dest\/$1.closure.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: false,
        release: true,
        linker: 'closure-lib'
      },

      global: {
        src: ['src/danish-stemmer.jsx', 'src/dutch-stemmer.jsx', 'src/english-stemmer.jsx', 'src/finnish-stemmer.jsx', 'src/french-stemmer.jsx',
              'src/german-stemmer.jsx', 'src/hungarian-stemmer.jsx', 'src/italian-stemmer.jsx', 'src/norwegian-stemmer.jsx', 'src/porter-stemmer.jsx',
              'src/portuguese-stemmer.jsx', 'src/romanian-stemmer.jsx', 'src/russian-stemmer.jsx', 'src/spanish-stemmer.jsx', 'src/swedish-stemmer.jsx',
              'src/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /src\/(.+)\.jsx/,
            replace: 'dest\/$1.global.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: false,
        release: true,
        linker: 'export-global'
      },

      standard: {
        src: ['src/danish-stemmer.jsx', 'src/dutch-stemmer.jsx', 'src/english-stemmer.jsx', 'src/finnish-stemmer.jsx', 'src/french-stemmer.jsx',
              'src/german-stemmer.jsx', 'src/hungarian-stemmer.jsx', 'src/italian-stemmer.jsx', 'src/norwegian-stemmer.jsx', 'src/porter-stemmer.jsx',
              'src/portuguese-stemmer.jsx', 'src/romanian-stemmer.jsx', 'src/russian-stemmer.jsx', 'src/spanish-stemmer.jsx', 'src/swedish-stemmer.jsx',
              'src/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /src\/(.+)\.jsx/,
            replace: 'dest\/$1.js'
        },
        add_search_path: ['<%= libDir %>'],
        release: true,
        minify: false
      },

      commonjs_min: {
        src: ['src/danish-stemmer.jsx', 'src/dutch-stemmer.jsx', 'src/english-stemmer.jsx', 'src/finnish-stemmer.jsx', 'src/french-stemmer.jsx',
              'src/german-stemmer.jsx', 'src/hungarian-stemmer.jsx', 'src/italian-stemmer.jsx', 'src/norwegian-stemmer.jsx', 'src/porter-stemmer.jsx',
              'src/portuguese-stemmer.jsx', 'src/romanian-stemmer.jsx', 'src/russian-stemmer.jsx', 'src/spanish-stemmer.jsx', 'src/swedish-stemmer.jsx',
              'src/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /src\/(.+)\.jsx/,
            replace: 'dest\/$1.common.min.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: true,
        release: true,
        linker: 'commonjs-lib'
      },

      amd_min: {
        src: ['src/danish-stemmer.jsx', 'src/dutch-stemmer.jsx', 'src/english-stemmer.jsx', 'src/finnish-stemmer.jsx', 'src/french-stemmer.jsx',
              'src/german-stemmer.jsx', 'src/hungarian-stemmer.jsx', 'src/italian-stemmer.jsx', 'src/norwegian-stemmer.jsx', 'src/porter-stemmer.jsx',
              'src/portuguese-stemmer.jsx', 'src/romanian-stemmer.jsx', 'src/russian-stemmer.jsx', 'src/spanish-stemmer.jsx', 'src/swedish-stemmer.jsx',
              'src/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /src\/(.+)\.jsx/,
            replace: 'dest\/$1.amd.min.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: true,
        release: true,
        linker: 'amd-lib'
      },

      closure_min: {
        src: ['src/danish-stemmer.jsx', 'src/dutch-stemmer.jsx', 'src/english-stemmer.jsx', 'src/finnish-stemmer.jsx', 'src/french-stemmer.jsx',
              'src/german-stemmer.jsx', 'src/hungarian-stemmer.jsx', 'src/italian-stemmer.jsx', 'src/norwegian-stemmer.jsx', 'src/porter-stemmer.jsx',
              'src/portuguese-stemmer.jsx', 'src/romanian-stemmer.jsx', 'src/russian-stemmer.jsx', 'src/spanish-stemmer.jsx', 'src/swedish-stemmer.jsx',
              'src/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /src\/(.+)\.jsx/,
            replace: 'dest\/$1.closure.min.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: true,
        release: true,
        linker: 'closure-lib'
      },

      global_min: {
        src: ['src/danish-stemmer.jsx', 'src/dutch-stemmer.jsx', 'src/english-stemmer.jsx', 'src/finnish-stemmer.jsx', 'src/french-stemmer.jsx',
              'src/german-stemmer.jsx', 'src/hungarian-stemmer.jsx', 'src/italian-stemmer.jsx', 'src/norwegian-stemmer.jsx', 'src/porter-stemmer.jsx',
              'src/portuguese-stemmer.jsx', 'src/romanian-stemmer.jsx', 'src/russian-stemmer.jsx', 'src/spanish-stemmer.jsx', 'src/swedish-stemmer.jsx',
              'src/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /src\/(.+)\.jsx/,
            replace: 'dest\/$1.global.min.js'
        },
        add_search_path: ['<%= libDir %>'],
        minify: true,
        release: true,
        linker: 'export-global'
      },

      standard_min: {
        src: ['src/danish-stemmer.jsx', 'src/dutch-stemmer.jsx', 'src/english-stemmer.jsx', 'src/finnish-stemmer.jsx', 'src/french-stemmer.jsx',
              'src/german-stemmer.jsx', 'src/hungarian-stemmer.jsx', 'src/italian-stemmer.jsx', 'src/norwegian-stemmer.jsx', 'src/porter-stemmer.jsx',
              'src/portuguese-stemmer.jsx', 'src/romanian-stemmer.jsx', 'src/russian-stemmer.jsx', 'src/spanish-stemmer.jsx', 'src/swedish-stemmer.jsx',
              'src/turkish-stemmer.jsx'],
        output_rule: {
            regexp: /src\/(.+)\.jsx/,
            replace: 'dest\/$1.min.js'
        },
        add_search_path: ['<%= libDir %>'],
        release: true,
        minify: true
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
    'jsx:global',
    'jsx:commonjs_min',
    'jsx:amd_min',
    'jsx:closure_min',
    'jsx:standard_min',
    'jsx:global_min'
  ]);
  grunt.registerTask('sample', ['jsx:sample']);
  grunt.registerTask('doc', ['jsx:doc']);
};
// vim: set expandtab tabstop=2 shiftwidth=2:
