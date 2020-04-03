import * as React from 'react';
import { IconProps } from '../index';
export default class SvgClip extends React.PureComponent<IconProps> {
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
          d="M17.293 4.707a2.536 2.536 0 00-3.586 0l-7.75 7.75a4.303 4.303 0 006.086 6.086l8.25-8.25 1.414 1.414-8.25 8.25a6.303 6.303 0 11-8.914-8.914l7.75-7.75a4.536 4.536 0 116.414 6.414l-7.25 7.25a2.768 2.768 0 11-3.914-3.914l6.75-6.75 1.414 1.414-6.75 6.75a.768.768 0 001.086 1.086l7.25-7.25c.99-.99.99-2.596 0-3.586z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
