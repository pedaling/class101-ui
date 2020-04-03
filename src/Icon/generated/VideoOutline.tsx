import * as React from 'react';
import { IconProps } from '../index';
export default class SvgVideoOutline extends React.PureComponent<IconProps> {
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
        <path d="M15.5 12L10 9v6l5.5-3z" fill={this.props.fillColor} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2H3zm0 16h18V5H3v14z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
