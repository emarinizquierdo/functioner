module.exports = function (wallaby) {
  return {
    files: [
      'functions/**/*.js',
      "!functions/node_modules/**/*"
    ],
    tests: [
      'test/**/*Spec.js'
    ],
    env: {
      type: 'node'
    },
    testFramework: 'jasmine'
  };
};
