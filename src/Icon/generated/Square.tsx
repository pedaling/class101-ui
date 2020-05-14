import * as React from 'react';
import { IconProps } from '../index';
export default class SvgSquare extends React.PureComponent<IconProps> {
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
          d="M4 9h5V4H4v5zM2 2.889C2 2.4 2.4 2 2.889 2h7.222c.489 0 .889.4.889.889v7.222c0 .489-.4.889-.889.889H2.89A.892.892 0 012 10.111V2.89zM15 9h5V4h-5v5zm-2-6.111c0-.489.4-.889.889-.889h7.222c.489 0 .889.4.889.889v7.222c0 .489-.4.889-.889.889H13.89a.892.892 0 01-.889-.889V2.89zM9 20H4v-5h5v5zm-6.111-7C2.4 13 2 13.4 2 13.889v7.222c0 .489.4.889.889.889h7.222c.489 0 .889-.4.889-.889V13.89c0-.489-.4-.889-.889-.889H2.89zM15 20h5v-5h-5v5zm-2-6.111c0-.489.4-.889.889-.889h7.222c.489 0 .889.4.889.889v7.222c0 .489-.4.889-.889.889H13.89a.892.892 0 01-.889-.889V13.89z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
