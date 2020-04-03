import * as React from 'react';
import { IconProps } from '../index';
export default class SvgStoreOutline extends React.PureComponent<IconProps> {
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
          d="M5 2a1 1 0 00-.92.606L1 9.795V10a3.5 3.5 0 002 3.163V21a1 1 0 001 1h16a1 1 0 001-1v-7.837A3.5 3.5 0 0023 10v-.205l-3.08-7.189A1 1 0 0019 2H5zm14 11.465a3.49 3.49 0 01-2-1.015 3.49 3.49 0 01-2.5 1.05 3.49 3.49 0 01-2.5-1.05 3.49 3.49 0 01-2.5 1.05A3.49 3.49 0 017 12.45a3.491 3.491 0 01-2 1.015V20h14v-6.535zM8 10H6a1.5 1.5 0 01-2.99.18L5.66 4h12.68l2.65 6.18A1.5 1.5 0 0118 10h-2a1.5 1.5 0 01-3 0h-2a1.5 1.5 0 01-3 0z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
