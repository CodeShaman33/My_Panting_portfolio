import path from 'path';

export default {
  entry: './form.mjs',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
  },
  target: 'web',
  mode: 'production',
};
