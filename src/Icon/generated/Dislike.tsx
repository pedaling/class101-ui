import * as React from 'react';
import { IconProps } from '../index';
export default class SvgDislike extends React.PureComponent<IconProps> {
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
          d="M4 12.005c0 .55.443.995.999.995h1.002c.552 0 .999-.456.999-.995v-8.01A.994.994 0 006.001 3H4.999C4.447 3 4 3.456 4 3.995v8.01zM14 14h5.604a2 2 0 001.967-2.358l-1.422-7.82A1 1 0 0019.165 3H10a1 1 0 00-1 1v9l3 7.5c1.5 0 2.5-1 2.5-2.5 0-1-.167-2.333-.5-4z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
