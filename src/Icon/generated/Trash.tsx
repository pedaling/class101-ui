import * as React from 'react';
import { IconProps } from '../index';
export default class SvgTrash extends React.PureComponent<IconProps> {
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
          d="M8 5V3.999A2 2 0 019.99 2h4.02C15.11 2 16 2.893 16 3.999V5h4.1c.6 0 .9.333.9 1s-.3 1-.9 1H3.9C3.3 7 3 6.667 3 6s.3-1 .9-1H8zm2 0h4V4h-4v1zM5 8h2v11.008c0 .547.448.992 1.006.992h7.988A1 1 0 0017 19.008V8h2v11.008A3 3 0 0115.994 22H8.006A2.998 2.998 0 015 19.008V8zm4 2.872c0-.481.444-.872 1-.872.552 0 1 .396 1 .872v5.256c0 .481-.444.872-1 .872-.552 0-1-.396-1-.872v-5.256zm4 0c0-.481.444-.872 1-.872.552 0 1 .396 1 .872v5.256c0 .481-.444.872-1 .872-.552 0-1-.396-1-.872v-5.256z"
        />
      </svg>
    );
  }
}
