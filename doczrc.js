const ORANGE = '#FD7E14';
const FONT_FAMILY =
  '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif';

export default {
  title: 'Class101 UI',
  description: 'A React-based UI Component Library, powered by Class101.',
  src: './docs/',
  dest: './public',
  public: '/pub',
  docgenConfig: {
    searchPatterns: [
      'src/**/*.{ts,tsx,js,jsx,mjs}',
      'docs/**/*.{ts,tsx,js,jsx,mjs}',
      '!**/node_modules',
      '!**/doczrc.js',
    ],
  },
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
      body: FONT_FAMILY,
      heading: FONT_FAMILY,
    },
  },
};
