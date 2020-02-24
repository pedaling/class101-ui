import * as React from 'react';
import { IconProps } from '../index';
export default class SvgShippingTruckOutline extends React.PureComponent<IconProps> {
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
          d="M4 17H3a1 1 0 01-1-1V5a1 1 0 011-1h11a1 1 0 011 1v1h4l3 4v6a1 1 0 01-1 1h-1c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4c0 1.66-1.34 3-3 3s-3-1.34-3-3zm14-9h-3v5h5v-2.5L18 8zm-1 10c.553 0 1-.447 1-1 0-.553-.447-1-1-1-.553 0-1 .447-1 1 0 .553.447 1 1 1zM7 18c.553 0 1-.447 1-1 0-.553-.447-1-1-1-.553 0-1 .447-1 1 0 .553.447 1 1 1zM4 6h9v7H4V6z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
