import * as React from 'react';
import { IconProps } from '../index';
export default class SvgMessageOutline extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm3.514 2.143L12 10.833l4.485-2.69a1 1 0 011.03 1.714l-5 3a1 1 0 01-1.03 0l-5-3a1 1 0 111.03-1.714z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
