function defaultTemplate({ template }, _, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
  const IconComponentName = componentName.name.slice(3);

  return typeScriptTpl.ast`
    import React from 'react';
    import { IconProps } from '../index';
    
    export const ${IconComponentName} = React.memo<IconProps>(({size = 24, fillColor = '#1B1C1D', className, style}) => ${jsx})
  `;
}
module.exports = defaultTemplate;
