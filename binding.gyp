{
  "targets": [
    { 
      "target_name": "randomx",
      'cflags!': [ '-fno-exceptions' ],
      'cflags_cc!': [ '-fno-exceptions' ],
      'msvs_settings': {
        'VCCLCompilerTool': { 'ExceptionHandling': 1 },
      },
      "include_dirs" : [
        "<!@(node -p \"require('node-addon-api').include\")",
      ],
      'dependencies': [
        "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      'conditions': [
          ['OS=="linux"', {
            "libraries": [
              "../RandomX/build/librandomx.a"
            ],
          }],
          ['OS=="mac"', {
            "libraries": [
              "../RandomX/build/librandomx.a"
            ],
            'xcode_settings': {
              'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
              "CLANG_CXX_LIBRARY": 'libc++',
              "CLANG_CXX_LANGUAGE_STANDARD":"c++17",
              'MACOSX_DEPLOYMENT_TARGET': '10.7',
            }
          }],
          ['OS=="win"', {
            "libraries": [
              "../RandomX/build/randomx.lib"
            ],
          }],
       ],
      "sources": [  
        "./src/randomx-node.cc",
      ],      
    }
  ]
}
