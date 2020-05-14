import * as React from 'react';
import { IconProps } from '../index';
export default class SvgLinkOutside extends React.PureComponent<IconProps> {
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
          d="M5 19h14v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6v2H5v14zm16-9h-2V6.5L13.5 12 12 10.5 17.5 5H14V3h7v7z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
