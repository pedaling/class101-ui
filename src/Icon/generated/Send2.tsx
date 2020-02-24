import * as React from 'react';
import { IconProps } from '../index';
export default class SvgSend2 extends React.PureComponent<IconProps> {
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
          d="M6 11h4a1 1 0 110 2H6v6l13-7L6 5v6zm.948 9.76C5.616 21.479 4 20.514 4 19V5c0-1.513 1.616-2.478 2.948-1.76l13 7c1.403.754 1.403 2.766 0 3.52l-13 7z"
        />
      </svg>
    );
  }
}
