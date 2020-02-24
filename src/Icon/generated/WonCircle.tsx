import * as React from 'react';
import { IconProps } from '../index';
export default class SvgWonCircle extends React.PureComponent<IconProps> {
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
          d="M8.071 11.357L7.5 8.786h1.071l1.286 6 1.286-6h1.714l1.286 6 1.286-6H16.5l-.571 2.571h1.214v1.286h-1.5l-.857 3.857H13.5L12 10.071 10.5 16.5H9.214l-.857-3.857h-1.5v-1.286h1.214zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
