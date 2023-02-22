import path from 'path';

export default {
  entry: './form.mjs',
  output: {
    filename: 'bundle.js',
    path: path.resolve(new URL('.', import.meta.url).pathname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
  },
  target: 'web',
  mode: 'production',
};
