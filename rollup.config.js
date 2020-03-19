import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import typescript from 'rollup-plugin-typescript2';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

const getPlugins = format => [
  external(),
  postcss({
    modules: true,
  }),
  url(),
  babel({
    exclude: 'node_modules/**',
  }),
  resolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
  typescript({
    typescript: require('typescript'),
    objectHashIgnoreUnknownHack: true,
    ...(format === 'cjs' && { tsconfigOverride: { compilerOptions: { declaration: false } } }),
  }),
  commonjs({ extensions: ['.js', '.ts'] }),
  visualizer({
    sourcemap: false,
    bundlesRelative: false,
    template: 'treemap', // sunburst, treemap, circlepacking, network
  }),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.module),
      format: 'esm',
      sourcemap: true,
    },
    external: ['classnames', 'react-popper', 'swiper/dist/js/swiper.esm.js', 'polished', 'path-to-regexp'],
    plugins: getPlugins('esm'),
    preserveModules: true,
  },
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.main),
      format: 'cjs',
      sourcemap: true,
    },
    external: ['classnames', 'react-popper', 'swiper/dist/js/swiper.esm.js', 'polished', 'path-to-regexp'],
    plugins: getPlugins('cjs'),
  },
];
