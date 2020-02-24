import * as React from 'react';
import { IconProps } from '../index';
export default class SvgContents extends React.PureComponent<IconProps> {
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
          d="M4.889 2H19.11a.9.9 0 01.889.91v18.18a.9.9 0 01-.889.91H4.89A.9.9 0 014 21.09V2.91A.9.9 0 014.889 2zM6 4v6h12V4H6zm0 8v2h12v-2H6zm0 4v2h10v-2H6z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
