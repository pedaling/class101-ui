import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPerson extends React.PureComponent<IconProps> {
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
          d="M12 12c2.762 0 5-2.238 5-5s-2.238-5-5-5-5 2.238-5 5 2.238 5 5 5zm-7 7.5V22h14v-2.5c0-2.992-2.622-5.5-7-5.5s-7 2.508-7 5.5z"
        />
      </svg>
    );
  }
}
