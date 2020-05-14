import * as React from 'react';
import { IconProps } from '../index';
export default class SvgSearch extends React.PureComponent<IconProps> {
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
          d="M15.907 17.059a8.5 8.5 0 111.151-1.151L23 21l-2 2-5.093-5.941zM17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
