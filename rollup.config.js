import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import url from 'rollup-plugin-url';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const dependencies = ['classnames', 'react-popper', 'swiper/dist/js/swiper.esm.js', 'polished', 'path-to-regexp'];

const getPlugins = (format) => [
  external(),
  postcss({
    modules: true,
  }),
  url(),
  typescript({
    typescript: require('typescript'),
    ...(format === 'cjs' && { tsconfigOverride: { compilerOptions: { declaration: false } } }),
  }),
  resolve({
    extensions,
  }),
  commonjs({ extensions: ['.js', '.ts'] }),
  babel({
    exclude: 'node_modules/**',
    extensions,
  }),
  process.env.RUNNING_ENV === 'analyze' && format === 'cjs'
    ? visualizer({
        sourcemap: false,
        bundlesRelative: false,
        open: true,
        gzipSize: true,
        template: 'treemap', // sunburst, treemap, circlepacking, network
      })
    : undefined,
];

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.module),
      format: 'esm',
      sourcemap: true,
      preserveModulesRoot: 'src',
    },
    external: dependencies,
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
    external: dependencies,
    plugins: getPlugins('cjs'),
  },
];
