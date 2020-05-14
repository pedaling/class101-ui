function template({ template }, opts, { imports, componentName, jsx }) {
  const typeScriptTpl = template.smart({
    plugins: ['typescript', 'classProperties'],
  });

  return typeScriptTpl.ast`
    ${imports}
    import { IconProps } from '../index';

    export default class ${componentName} extends React.PureComponent<IconProps> {
      public static defaultProps: Partial<IconProps> = {
        fillColor: '#1B1C1D',
        accentColor: '#DDE0E2',
        size: 24,
      };

      public render() {
        return (
          ${jsx}
        );
      }
    }
  `;
}

module.exports = template;
