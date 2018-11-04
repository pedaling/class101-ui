import path from 'path';

export default {
  title: 'Class101 UI Docs',
  description: 'A React-based UI Component Library, powered by Class101.',
  src: './docs/',
  themeConfig: {
    showPlaygroundEditor: true,
    colors: {
      primary: '#fd7e14',
    },
  },
  modifyBundlerConfig: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          'class101-ui': path.resolve('./src')
        }
      }
    }),
};
