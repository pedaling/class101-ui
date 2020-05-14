import * as React from 'react';
import { IconProps } from '../index';
export default class SvgProject extends React.PureComponent<IconProps> {
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.382 15H12v-1h3a1 1 0 001-1V9h3.38l-1.275 2.552a1 1 0 000 .895L19.382 15zM4.692 6H14v6H6.026L4.692 6zm15.427 6l1.776-3.553A.998.998 0 0021 7h-5V5a1 1 0 00-1-1H4.248l-.271-1.217a1.005 1.005 0 00-1.193-.76c-.54.12-.88.654-.76 1.194l4 18a1.002 1.002 0 001.193.759c.539-.12.879-.654.76-1.194L6.47 14H10v2a1 1 0 001 1h10a1 1 0 00.895-1.447l-1.776-3.553z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
