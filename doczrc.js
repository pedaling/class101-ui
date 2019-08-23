import path from 'path';

export default {
  title: 'Class101 UI Docs',
  description: 'A React-based UI Component Library, powered by Class101.',
  src: './docs/',
  dest: './public',
  public: '/pub',
  themeConfig: {
    showPlaygroundEditor: true,
    colors: {
      primary: '#fd7e14',
    },
  },
  wrapper: 'docs/Wrapper',
  typescript: true,
  modifyBundlerConfig: config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@class101/ui': path.resolve('./src'),
      },
    },
  }),
};
