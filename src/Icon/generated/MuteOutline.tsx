import React from 'react';
import { IconProps } from '../index';
export default class SvgMuteOutline extends React.PureComponent<IconProps> {
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
          d="M20 22.5l1.5-1.5L3 2.5 1.5 4l3 3H2a1 1 0 00-1 1v8a1 1 0 001 1h4l5.445 3.832A1 1 0 0013 20v-4.5l3.375 3.375a5.869 5.869 0 01-.57.145 1 1 0 10.391 1.96 7.905 7.905 0 001.726-.558L20 22.5zm-9-9L6.5 9H3v6h3.633L11 18.073V13.5z"
          fill={this.props.fillColor}
        />
        <path
          d="M23 12c0 2.255-.68 4.205-1.783 5.717L19.78 16.28C20.537 15.133 21 13.68 21 12c0-3.817-2.389-6.458-5.196-7.02a1 1 0 11.392-1.96C19.901 3.76 23 7.186 23 12z"
          fill={this.props.fillColor}
        />
        <path
          d="M19 12c0 1.048-.21 2.012-.647 2.853l-1.53-1.53c.12-.402.177-.844.177-1.323 0-1.386-.486-2.455-1.555-3.168a1 1 0 011.11-1.664C18.225 8.282 19 9.987 19 12zM13 4v5.5l-2-2V5.927l-.923.65L8.64 5.14l2.804-1.973A1 1 0 0113 4z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
