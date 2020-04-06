const ORANGE = '#FD7E14';

export default {
  title: 'Class101 UI',
  description: 'A React-based UI Component Library, powered by Class101.',
  src: './docs/',
  dest: './public',
  public: '/pub',
  port: '3003',
  menu: ['Class101 UI', 'Core', 'Components', 'Form Controls', 'Form Inputs', 'Overlays'],
  typescript: true,
  themeConfig: {
    colors: {
      text: '#3E4042',
      background: '#fff',
      primary: ORANGE,
      secondary: '#7ABDD3',
      accent: ORANGE,
      highlight: ORANGE,
      muted: '#EDEFF0',
      link: {
        color: ORANGE,
      },
      sidebar: {
        navLinkActive: ORANGE,
      },
      header: {
        button: {
          bg: ORANGE,
        },
      },
      props: {
        highlight: ORANGE,
      },
    },
    fonts: {
      body:
        '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif',
      heading:
        '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif',
    },
    styles: {
      h1: { fontFamily: 'inherit' },
      h2: { fontFamily: 'inherit' },
      h3: { fontFamily: 'inherit' },
      div: { fontFamily: 'inherit' },
      p: { fontFamily: 'inherit' },
    },
  },
};
