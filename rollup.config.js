import path from 'path';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const dependencies = ['classnames', 'react-popper', 'swiper', 'polished', 'path-to-regexp'];

const getPlugins = (format) => [
  external(),
  url(),
  typescript(),
  nodeResolve({
    extensions,
  }),
  commonjs({ extensions: ['.js', '.ts'] }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules',
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
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModulesRoot: 'src',
    },
    external: dependencies,
    plugins: getPlugins('esm'),
    preserveModules: true,
  }
];
