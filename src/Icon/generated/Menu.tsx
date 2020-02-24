import * as React from 'react';
import { IconProps } from '../index';
export default class SvgMenu extends React.PureComponent<IconProps> {
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
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path fill={this.props.fillColor} fillRule="evenodd" d="M3 8h18V6H3v2zm0 5h18v-2H3v2zm0 5h18v-2H3v2z" />
      </svg>
    );
  }
}
