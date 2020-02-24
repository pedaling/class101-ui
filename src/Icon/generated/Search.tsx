import * as React from 'react';
import { IconProps } from '../index';
export default class SvgSearch extends React.PureComponent<IconProps> {
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
          d="M16.33 15.219L21 19.5l-1.5 1.501-4.281-4.671a7.5 7.5 0 111.111-1.111zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
