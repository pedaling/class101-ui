import * as React from 'react';
import { IconProps } from '../index';
export default class SvgLikeOutline extends React.PureComponent<IconProps> {
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
          d="M13.14 10l.843-5.066a2 2 0 00-1.279-2.205l-.419-.155L9.681 9.78V20h8.8l1.467-8.836A1 1 0 0018.96 10H13.14zm-5.46-.571L11.09 0l2.307.853a4 4 0 012.56 4.41L15.5 8h3.461a3 3 0 012.96 3.491l-1.573 9.477C20.25 21.566 19.779 22 19.23 22H7.68V9.429z"
          fill={this.props.fillColor}
        />
        <path
          d="M3.135 9.429c-.632 0-1.135.56-1.135 1.25v10.07C2 21.427 2.508 22 3.135 22h2.273V9.429H3.135z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
