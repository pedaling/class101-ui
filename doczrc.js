import path from 'path';

export default {
  title: 'Class101 UI',
  description: 'A React-based UI Component Library, powered by Class101.',
  src: './docs/',
  dest: './public',
  public: '/pub',
  port: '3003',
  themeConfig: {
    showPlaygroundEditor: true,
    colors: {
      primary: '#fd7e14',
    },
    styles: {
      body: {
        fontFamily:
          '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif',
      },
      h1: {
        fontFamily: 'inherit',
        fontWeight: 600,
        lineHeight: '60px',
        fontSize: 40,
      },
    },
  },
  menu: ['Class101 UI', 'Core', 'Components', 'Form Controls', 'Form Inputs', 'Overlays'],
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
