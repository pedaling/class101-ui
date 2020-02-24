import * as React from 'react';
import { IconProps } from '../index';
export default class SvgCamera extends React.PureComponent<IconProps> {
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
          d="M9 3h6l1.83 2H20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3.17L9 3zm6.2 10c0 2.133-1.067 3.2-3.2 3.2S8.8 15.133 8.8 13 9.867 9.8 12 9.8s3.2 1.067 3.2 3.2zM12 18c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
