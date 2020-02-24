import * as React from 'react';
import { IconProps } from '../index';
export default class SvgThunder extends React.PureComponent<IconProps> {
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
          d="M18 10a1 1 0 01.774 1.633l-9 11c-.667.816-1.979.178-1.75-.85L9.754 14H6a1 1 0 01-.774-1.633l9-11c.667-.816 1.979-.178 1.75.85L14.246 10H18z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
