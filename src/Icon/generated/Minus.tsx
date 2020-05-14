import * as React from 'react';
import { IconProps } from '../index';
export default class SvgMinus extends React.PureComponent<IconProps> {
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
        <path d="M20 11H4v2h16v-2z" fill={this.props.fillColor} />
      </svg>
    );
  }
}
