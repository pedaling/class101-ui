import * as React from 'react';
import { IconProps } from '../index';
export default class SvgClap extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#1B1C1D',
    accentColor: '#DDE0E2',
    size: 24,
  };

  public render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        fill="none"
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          d="M20 5.5V4h-2.797a1 1 0 00-.94.662l-.556 1.545 1.418 1.418L18 5.5h2zM9.33 2.506a2 2 0 00-2.994.385l-4 6a2 2 0 00.25 2.523l.483.483 6.26-9.391z"
          fill={this.props.fillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.116 4.855a.986.986 0 011.467-.09c.314.31.646.636.831.82L18 11.173l1.262-3.51A1 1 0 0120.203 7H22v9a2 2 0 01-.586 1.414l-5 5a2 2 0 01-2.828 0l-8-8a2 2 0 01-.25-2.523l4-6c.153-.23.476-.65.78-1.036z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
