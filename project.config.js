const path = require('path')
const NODE_ENV = process.env.NODE_ENV || 'dev'
const NODE_ANALYZE = process.env.NODE_ANALYZE || false

module.exports = {
  env: NODE_ENV,  /** The environment to use when building the project */

  analyze: NODE_ANALYZE, /** Run bundle analyser */

  main: 'main',  /** The file name of the application's entry point */

  sourcemaps: true,  /** Whether to generate sourcemaps */

  basePath: __dirname,  /** The full path to the project's root directory */

  srcDir: 'client', /** Directory name containing the application source code */

  srcPath: path.normalize(__dirname + '/client'),  /** Directory path containing the application source code */

  outDir: 'dist', /** Directory name in which to emit compiled assets */

  outPath: path.normalize(__dirname + '/dist'),  /** Directory path in which to emit compiled assets */

  publicPath: path.normalize(__dirname + 'public')  /** The base path for all projects assets */
}
