import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import copy from '@rollup/plugin-copy'; 

const extensions = ['.js', '.jsx'];

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: 'dist/index.es.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions,
      presets: ['@babel/preset-react'],
    }),
    postcss({
      extract: true,
      minimize: true,
      modules: false,
    }),
    copy({
      targets: [
        { 
          src: 'src/styles/cursor.css', 
          dest: 'dist/styles',
          rename: 'cursor.css' 
        },
      ],
    }),
    terser(),
  ],
};