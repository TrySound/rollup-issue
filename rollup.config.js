export default {
  input: './index.js',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    {
      generateBundle(outputOptions, bundle) {
        // empty
        console.log(bundle['index.js'].modules)
      }
    }
  ]
}
