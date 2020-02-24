import * as React from 'react';
import { IconProps } from '../index';
export default class SvgSubtitle extends React.PureComponent<IconProps> {
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
          d="M1 4a1 1 0 011-1h20a1 1 0 011 1v16a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm5 12h12c.43 0 1 .448 1 1s-.57 1-1 1H6c-.43 0-1-.448-1-1s.57-1 1-1zm2-4h8c.43 0 1 .448 1 1s-.57 1-1 1H8c-.43 0-1-.448-1-1s.57-1 1-1z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
