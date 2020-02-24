import * as React from 'react';
import { IconProps } from '../index';
export default class SvgDepositPassbook extends React.PureComponent<IconProps> {
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
          d="M5 13h14V5H5v8zm17.949 6.684A1 1 0 0122 21H2a1 1 0 01-.949-1.316L3 13.838V4a1 1 0 011-1h16a1 1 0 011 1v9.838l1.949 5.846zM19.279 15H4.721l-1.334 4h17.226l-1.334-4zM7 7h10v2H7V7z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
