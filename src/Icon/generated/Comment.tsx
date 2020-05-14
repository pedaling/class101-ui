import * as React from 'react';
import { IconProps } from '../index';
export default class SvgComment extends React.PureComponent<IconProps> {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 12a8 8 0 018-8h6a8 8 0 110 16h-1.5L12 21.5 10.5 20H9a8 8 0 01-8-8zm8 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
