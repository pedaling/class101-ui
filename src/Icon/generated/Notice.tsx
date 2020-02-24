import * as React from 'react';
import { IconProps } from '../index';
export default class SvgNotice extends React.PureComponent<IconProps> {
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
          d="M17 15V4.766l-3.486 2.092A1 1 0 0113 7h-1v8h1a1 1 0 01.514.143L17 17.233V15zm2-7.874a4.002 4.002 0 010 7.748V19a1 1 0 01-1.515.858L12.723 17H12v5a1 1 0 01-1 1H7a1 1 0 01-1-1v-5.341A6 6 0 018 5h4.723l4.762-2.857A1 1 0 0119 3v4.126zm0 2.142v3.464a2 2 0 000-3.464zM8 17v4c.196-.003.862-.003 2 0v-4H8zm2-2V7H8a4 4 0 100 8h2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
