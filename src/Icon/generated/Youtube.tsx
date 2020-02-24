import * as React from 'react';
import { IconProps } from '../index';
export default class SvgYoutube extends React.PureComponent<IconProps> {
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
        <path
          fill={this.props.fillColor}
          fillRule="evenodd"
          d="M21.582 7.17a2.513 2.513 0 00-1.768-1.78C18.254 4.968 12 4.968 12 4.968s-6.254 0-7.814.42a2.513 2.513 0 00-1.768 1.78C2 8.74 2 12.014 2 12.014s0 3.276.418 4.845c.23.866.908 1.52 1.768 1.752 1.56.42 7.814.42 7.814.42s6.254 0 7.814-.42a2.476 2.476 0 001.768-1.752C22 15.29 22 12.014 22 12.014s0-3.275-.418-4.845zM9.955 14.987V9.04l5.227 2.974-5.227 2.974z"
        />
      </svg>
    );
  }
}
